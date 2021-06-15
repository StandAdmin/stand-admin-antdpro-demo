import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import routeConfig from '@/../config/routes';

import { GitlabOutlined } from '@ant-design/icons';

const findRouteMatch = (routeList, isMatch) => {
  let matchItem = null;
  routeList.some((item) => {
    if (item.routes) {
      matchItem = findRouteMatch(item.routes, isMatch);
    } else if (isMatch(item)) {
      matchItem = item;
    }

    return !!matchItem;
  });

  return matchItem;
};

export default (props) => {
  const [extraContent, setExtraContent] = useState(null);

  const {
    children,
    location: { pathname },
    route: { routes },
  } = props;

  const matchRouteItem = routes.find((item) => item.path === pathname);

  const matchConfigItem = matchRouteItem
    ? findRouteMatch(routeConfig, (item) => {
        return (
          item.name === matchRouteItem.name && matchRouteItem.path.indexOf(`/${item.path}`) > 0
        );
      })
    : null;

  useEffect(() => {
    let timeId;

    const tryLoad = () => {
      timeId = null;

      if (!matchConfigItem) {
        return;
      }

      const containerNode = document.getElementById('page-header-bottom');

      if (containerNode) {
        setExtraContent(
          ReactDOM.createPortal(
            <>
              <a
                href={`https://github.com/rooseve/stand-admin-antdpro-demo/tree/main/src/pages/${matchConfigItem.component}`}
                target="_blank"
              >
                <GitlabOutlined /> 查看代码
              </a>
            </>,
            containerNode,
          ),
        );
      } else {
        timeId = setTimeout(tryLoad, 10);
      }
    };

    tryLoad();

    return () => clearTimeout(timeId);
  }, [matchConfigItem]);

  return (
    <>
      {React.cloneElement(children, props)}
      {extraContent}
      {matchConfigItem && <style>{`#page-header-bottom{ height: 32px}`}</style>}
    </>
  );
};
