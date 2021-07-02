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

        <nav className="flex flex-cols-2 py-3 space-x-2">
          <a
            className="App-link border rounded text-purple-800 bg-blue-800 px-2 hover:bg-red-800"
            href="/loaders"
            target="_blank"
            rel="noopener noreferrer"
          >
            All of them
          </a>
          <a
            className="App-link px-4 border rounded text-purple-800 bg-blue-800 hover:bg-red-800"
            href="https://github.com/manojap/react-css-loaders"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>
    </div>
  )
}
