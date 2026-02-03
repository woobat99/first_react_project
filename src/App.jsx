import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: 'Hello',
  title: 'General Kenobi',
};

const list = [
  {
    title: 'React',
    url: 'https://react.dev',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
   title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abromov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1, 
  },
  
];

const App = () => 
   (
      <div>
        
        <h2>{welcome.greeting},{welcome.title}</h2>
        <List />
        <Search />
      </div>
  );


const List =()=> (
  <ul>
        {list.map((item)=>(
          <li key = {item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span> by {item.author}. </span>
            <span>{item.num_comments} comments. </span>
            <span>{item.points} points. </span>
          </li>
        ))}
        </ul>
 )


const Search=()=>(
  <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
  </div>
)

export default App
