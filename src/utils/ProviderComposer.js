import React from 'react';

export default function ProviderComposer(props) {
  const { providers = [], children } = props;

  return (
    <>
      {providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
}
