import React, { Component } from 'react';

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoaderHOC = (propName) => (WrappedComponent) => {
  return class MyLoaderHOC extends Component {
    render() {
      return isEmpty(this.props[propName]) ? <p>(HOC) loading ...</p> : <WrappedComponent { ... this.props } />;
    }
  }
};

export default LoaderHOC;