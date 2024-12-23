import React, { ComponentType } from 'react';
import { screensWithSafeArea } from '../screens';
import ScreenWithSafeAreaView from './ScreenWithSafeAreaView';

const withSafeArea = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: { [x: string]: any; route: any; }) => {
    const { route, ...restProps } = props;
    const hasSafeArea = screensWithSafeArea.includes(route.name); 

    return (
      <ScreenWithSafeAreaView hasSafeAreaView={hasSafeArea}>
        <WrappedComponent {...(restProps as P)} />
      </ScreenWithSafeAreaView>
    );
  };
};

export default withSafeArea;
