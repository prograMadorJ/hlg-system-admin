import React from 'react';

import Card from '../Card';

export default function ({ data, show }) {
  const json = JSON.stringify(data, null, 1);
  show && console.log(json);
  return show ? <Card>{json}</Card> : null;
}
