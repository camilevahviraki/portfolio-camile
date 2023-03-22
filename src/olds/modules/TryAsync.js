/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import Typed from 'react-typed';
import '../styles/wrapChats.css';

export default function TryAsync() {
  const Chats = [
    {
      message: 'Hello there!',
      id: 0,
    },
    {
      message: 'Hello,',
      id: 1,
    },
    {
      message: 'I’m a software developer',
      id: 2,
    },
    {
      message: 'I can help you build a product , feature or website',
      id: 3,
    },
    {
      message: 'Look through some of my work and experience',
      id: 4,
    },
  ];
  const [array] = React.useState(Chats);
  const [displayArray, setDisplayArray] = React.useState([]);
  const [displayEl, setDisplayEl] = React.useState();

  const delay = (ms) => new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });

  React.useEffect(() => {
    (async function () {
      for (const el of array) {
        // eslint-disable-next-line no-await-in-loop
        await delay(6000);
        setDisplayEl(el);
      }
      setDisplayEl(undefined);
    }());
  }, [array]);

  React.useEffect(() => {
    displayEl && setDisplayArray((prev) => [...prev, displayEl]);
  }, [displayEl]);

  return (
    <div className="AllMessages">
      {displayArray.map((elem, key) => (
        <Typed
          className={`message message${key}`}
          key={key}
          strings={['...', elem.message]}
          typeSpeed={100}
          backSpeed={50}
        />
      ))}
    </div>
  );
}
