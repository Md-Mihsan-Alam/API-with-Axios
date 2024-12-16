import React, { useState } from 'react'
import { PostData } from '../API/PostApi';

export default function AddForm({data, setdata}) {

  const [addData, setaddData] = useState({
    title: "",
    body: ""
    });

  const handleinput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setaddData((prev) =>{
      return{
        ...prev, [name]:value,
      }
    })
  }


  // const addSubmitedData = async () => {
  //   try {
  //     const res = await PostData(addData); // Post the form data to the API
  //     console.log('res', res);
  
  //     if ((res.status === 201)) {
  //       // Add new data to the existing array
  //       setdata([...data, res.data]);
  
  //       // Reset form fields using setaddData, not setData
  //       setaddData({ title: "", body: "" });
  //     }
  //   } catch (error) {
  //     console.error("Error while adding data:", error);
  //   }
  // };

  
  const addSubmitedData = async () => {
    const res = await PostData(addData);
    console.log('res', res);
    

    if((res.status === 201)){
      setdata([...data, res.data]);
      setaddData({title:"", body:""});
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addSubmitedData();
  }

  return (
    <div >
      <form onSubmit={handleFormSubmit}>
          <div className='formdiv'>

          <input
            type="text"
            placeholder="Enter title"
            onChange={handleinput}
            value={addData.title}
            name='title'
          />

         
          <input
            type="text"
            placeholder="Enter body"
            onChange={handleinput}
            value={addData.body}
            name='body'
          />



        <button type="submit" className='addbtn'>Add New</button>
        </div>
      </form>
    </div>
  )
}
