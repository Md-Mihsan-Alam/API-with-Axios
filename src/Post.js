import React, {useEffect, useState} from 'react'
import GetData from './API/PostApi';
import Card from './Component/Card';
import AddForm from './Component/AddForm';

export default function Post() {

  const [data, setData] = useState([]);

  const getuserData = async() =>{
    


      const res = await GetData();
      console.log(res.data);
      setData(res.data);
  }
    
  useEffect(()=>{
    
    getuserData();

  },[]);
  
  // const deleteHandler = (id) => {
  //   setData((prevData) => prevData.filter((item) => item.id !== id));
  // };
  

  const deleteHandler = (id) => {

    setData((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== id);
      console.log(updatedData);
      return updatedData;
    });
  };

  return (
    
    <>
    <AddForm data={data} setdata={setData}/>

    <div className="container">
    <ul className="row">

      {data.map((Cdata) => (

        

        <li className="col-md-4" key={Cdata.id}>
          <Card UserData={Cdata} deleteHandler={deleteHandler}/>
        </li>

      ))}
      
    </ul>
  </div>
  </>
);

};


//