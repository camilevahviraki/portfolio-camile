import React from 'react';

const LimitText = (props) => {
  const {
    limit,
    text,
    className,
  } = props;

  let textArr = [];

  if (text) {
    textArr = text.split('');
  }
  let newTextArr = [];

  textArr.map((elmnt) => {
    if (newTextArr.length <= limit) {
      newTextArr = [...newTextArr, elmnt];
    }
  });

  return (
    <p className={className || 'p'}>
      {newTextArr.join('')}
      {newTextArr.length === textArr.length ? null : '...'}
    </p>
  );
};

export default LimitText;
