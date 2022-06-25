import React, { useEffect, useState } from 'react';

function WrapChat() {
  const Chats = [
    {
      message: 'Note that the development build is not optimized.To create a production build 1',
      id: 0,
    },
    {
      message: 'Note that the development build is not optimized.To create a production build 2',
      id: 1,
    },
    {
      message: 'Note that the development build is not optimized.To create a production build 3',
      id: 2,
    },
    {
      message: 'Note that the development build is not optimized.To create a production build 4',
      id: 3,
    },
  ];

  const [timer] = useState(Chats);
  const [displayArray, setDisplayArray] = useState([]);
  const [displayEl, setDisplayEl] = useState();

  const delay = (ms) => new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });

  useEffect(() => {
    (function () {
      for (const el of timer) {
        delay(3000);
        setDisplayEl(el);
      }
      setDisplayEl(undefined);
    }());
  }, [timer]);

  useEffect(() => {
    displayEl && setDisplayArray((prev) => [...prev, displayEl]);
  }, [displayEl]);

  return (
    <div className="chats" id="chats">
      {timer.map((message, index) => (
        <p id={`message${index}`} key={index}>{message.message}</p>
      ))}

    </div>
  );
}

export default WrapChat;
