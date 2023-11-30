import './App.css';
import { useEffect, useState } from 'react';
import A from './components/A';
import B from './components/B';

function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => setPosts(posts));
  },[]);

  return (
    <div className="App">
      <input
        value = {value}
        onChange={(e)=>setValue(e.target.value)}>
      </input>

      <div className="comps">
      <B message={value} posts = {posts}/>
        <A message={value} posts = {posts}/>
        //<B message={value} posts = {posts}/>
      </div>
    </div>
  );
}

export default App;
