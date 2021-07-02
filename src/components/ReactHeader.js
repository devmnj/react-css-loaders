import React from 'react'
import logo from '../logo.svg';

export default function ReactHeader() {
    return (
        <div>
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-purple-300 font-bold text-xl">
          Explore React Loaders
        </p>
        <a
          className="App-link "
          href="/loaders"
          target="_blank"
          rel="noopener noreferrer"
        >
          All of them
        </a>
      </header>
        </div>
    )
}
