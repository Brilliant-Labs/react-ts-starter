
import * as React from 'react';
import Hideable from '../components/Hideable';
import getConfig from 'next/config';
// the above config method returns the config exported from next.config.js

const { PACKAGE_REPO_URL, PACKAGE_NAME, PACKAGE_VERSION, NODE_ENV } = getConfig().publicRuntimeConfig

export interface INextTSAppMetaProps {
  package_version: string;
  node_env: string;
  package_name: string;
  package_repo_url: string;
}

class INextTSAppMeta extends React.Component<INextTSAppMetaProps, any> {
  public render() {
    const greeting = <div>Welcome to {this.props.package_name}!</div>;
    return (
      <div>
        <h4>{greeting}</h4>
        <Hideable hidden>package_name={this.props.package_name}</Hideable>
        <Hideable hidden>package_repo_url={this.props.package_repo_url}</Hideable>
        <Hideable hidden>version={this.props.package_version}</Hideable>
        <Hideable hidden>node_env={this.props.node_env}</Hideable>
      </div>
    );
  }
}


export default class INextTSAppHomepage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <INextTSAppMeta package_repo_url={PACKAGE_REPO_URL} package_name={PACKAGE_NAME} package_version={PACKAGE_VERSION} node_env={NODE_ENV} />
      </div>
    );
  }
}
