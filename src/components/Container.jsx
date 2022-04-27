import React from 'react';

export default function (props) {
  return <div style={{ margin: '1.3rem' }} {...props}>{props.children}</div>;
}
