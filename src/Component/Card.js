import React from 'react'
import { DeleteData } from '../API/PostApi';

export default function Card({ UserData, deleteHandler }) {
  const handleDeleteData = async (id) => {

    try {
      const res = await DeleteData(id);

      if (res.status === 200) {
        console.log(`Deleted post ID: ${id}`);
        deleteHandler(id); 

      }
      
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    
  };

  return (
    <div className="body">

      <div className="header">{UserData.id}</div>
      <h5 className="title">{UserData.title}</h5>
      <p className="text">{UserData.body}</p>

      <button type="button" className="btnedit">EDIT</button>
      <button type="button" className="btndanger" onClick={() => handleDeleteData(UserData.id)}>DELETE</button>

    </div>
  );
}
