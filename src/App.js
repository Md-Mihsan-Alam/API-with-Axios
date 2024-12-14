import React from 'react';
import './App.css';
import Post from './Post';
import AddForm from './Component/AddForm';

function App() {
  

  return (
    <div className="App">
      <h1>Using Axios CRUD operations</h1>
      <AddForm/>
      <Post/>
      
    </div>
  );
}

export default App;
