import React from 'react';
import './loadingPage.scss';

const LoadingPage = (props) => {
  const { content, isCheckConnection } = props;

  const renderLoading = () => {
    return (
      <>
        <div className="loading loading-page" />
        <span>{content}</span>
      </>
    );
  };
  const renderNotConnection = () => {
    return (
      <>
        <i />
        <span>{content}</span>
      </>
    );
  };
  return (
    <div
      className={`${isCheckConnection ? 'not-connection' : 'wrapper-loading'}`}
    >
      {isCheckConnection ? renderNotConnection() : renderLoading()}
    </div>
  );
};

export default LoadingPage;
