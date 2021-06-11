import React from 'react';
import { StandContext } from 'stand-admin-antdpro';

export default class extends React.Component {
  static contextType = StandContext;

  render() {
    const { storeRef } = this.context;

    return <pre>{JSON.stringify(storeRef, null, 2)}</pre>;
  }
}
