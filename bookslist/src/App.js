import React, {useSate, useState} from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useSate("");
  const [author, setAuthor] = useState("");

  // const [books, setBooks] = useSate([]);


  const handleSubmit = e => {
    e.preventDefault();
    console.log("Clicked");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div>
        <input 
          type="text" 
          placeholder="Author" 
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          
        />
        </div>
        <div>
        <input 
          type="text" 
          placeholder="ISBN" 
          value={isbn}
          onChange={(e)=>setIsbn(e.target.value)}
        />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
