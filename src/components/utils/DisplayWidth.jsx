import React, { useState } from 'react';

export default function () {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setInnerWidth(window.innerWidth);
  };

  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, color: '#fff' }}>
      width: {innerWidth}
    </div>
  );
}
