import * as React from 'react';

// designed for context being passed through to component tree, for things

export interface AppWrapperProps {
    children: any;
}

export interface AppWrapperState {

}

export default class AppWrapper extends React.Component<AppWrapperProps, AppWrapperState> {
  constructor(props: AppWrapperProps) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
