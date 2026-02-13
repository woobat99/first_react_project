import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: 'Hello',
  title: 'General Kenobi',
};


const App = () => {
   
    const stories = [
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
  return(
      <div>
        
        <h2>{welcome.greeting},{welcome.title}</h2>
        <List list={stories} />
        <Search />
      </div>
  );
};


const List =(props)=> (
  <ul>
        {props.list.map((item)=>(
          <Item key={item.objectID} item={item} />
        ))}
        </ul>
 )

 const Item = (props) =>(
          <li>
            <span><a href={props.item.url}>{props.item.title}</a></span>
            <span> by {props.item.author}. </span>
            <span>{props.item.num_comments} comments. </span>
            <span>{props.item.points} points. </span>
          </li>


 )

const Search=()=>{
  const handleChange = (event)=> {
//synthetic event
console.log(event);
//value of target (here: input HTML element)
console.log(event.target.value);
  };
  return(
  <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange}/>
  </div>
  );
};

export default App
