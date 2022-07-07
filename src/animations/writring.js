import React from 'react';
import Typed from 'react-typed';
import './writing.css';

function Writring() {
  const style = {
    color: 'blue',
  };
  return (
    <div>
      <Typed
        style={style}
        strings={['Hey there, I\'m Camile', 'Long time no see']}
        typeSpeed={100}
        backSpeed={50}
        loopCount={3}
      />
    </div>
  );
}

export default Writring;
