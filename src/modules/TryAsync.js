import React from 'react';
import '../styles/wrapChats.css';

export default function TryAsync() {
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
    {
      message: 'Note that the development build is not optimized.To create a production build 5',
      id: 3,
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
        await delay(5000);
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
      <h1>Wellcome to my portfolio</h1>
      {displayArray.map((elem, key) => (
        <div key={key} id={`message${key}`} className="message">
          Number:
          {elem.message}
        </div>
      ))}
    </div>
  );
}

// {
// "name":"value",
// "picture":"value",
// "shortDescription":"value",
// "longDescription":"value",
// "liveLink":"value",
// "codeLink":"value",
// "id":"value",
//     }
