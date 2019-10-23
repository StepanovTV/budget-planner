import React from 'react';

const withRenderLog = WrapperComponent => props => {
  // console.log(`@${WrapperComponent.name} re-render`);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrapperComponent {...props} />;
};

export default withRenderLog;
