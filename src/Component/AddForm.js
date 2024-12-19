import React, { useState, useEffect } from 'react'
import { PostData, PutData } from '../API/PostApi';

export default function AddForm({data, setdata, updateData, setUpdateData}) {

  const [addData, setaddData] = useState({
    title: "",
    body: ""
    });
    

    useEffect(()=>{
      updateData && setaddData ({
        title:updateData.title || "",
        body:updateData.body || ""
      });
    },[updateData]);


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
  //   const res = await PostData(addData);
  //   console.log('res', res);
    

  //   if((res.status === 201)){
  //     setdata([...data, res.data]);
  //     setaddData({title:"", body:""});
  //   }
  // }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   addSubmitedData();
  // }

  ////////////////// changed codeeeeeee 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (updateData) {

      try {
        const res = await PutData(updateData.id, addData);
        if (res.status === 200) {

          setdata((prevData) =>
            prevData.map((item) =>
              item.id === updateData.id ? { ...item, ...addData } : item
            )
          );
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {

      try {
        const res = await PostData(addData);
        if (res.status === 201) {
          setdata([...data, res.data]);
        }
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }

    setaddData({ title: "", body: "" });
    setUpdateData();
  };

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


        <button type="submit" className='addbtn'>{updateData ? "EDIT" : "ADD"}</button>
        </div>
      </form>
    </div>
  )
}


/// UserName : GOD , Pass : 1212
