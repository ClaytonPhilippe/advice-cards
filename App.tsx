import * as React from 'react';
import './style.css';
import Api from './services/api.tsx';

export default function Cards() {
  return (
    <div className="container">
      <h1 className="title">Advice Cards</h1>
      <p className="text2">Click on the card to generate a new advice.</p>
      <Api />
      <footer>
        <p>
          Coded by:
          <a href="https://github.com/claytonphilippe">ClaytonPhilippe</a>
        </p>
      </footer>
    </div>
  );
}
