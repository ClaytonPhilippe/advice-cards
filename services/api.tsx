import React, { useState, useEffect } from 'react';

export default function Api() {
  const [data, SetData] = useState();

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        SetData(data.slip.advice);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        SetData(data.slip.advice);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="cards" onClick={handleClick}>
      <h1 className="text">{data}</h1>
    </section>
  );
}
