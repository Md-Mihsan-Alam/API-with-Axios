import React, {useEffect, useState} from 'react'
import GetData from './API/PostApi';
import Card from './Component/Card';

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
  
  const deleteHandler = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
  
  return (
    <div className="container">
    <div className="row">

      {data.map((Cdata) => (
        <li className="col-md-4" key={Cdata.id}>
          <Card UserData={Cdata} />
        </li>
      ))}
      
    </div>
  </div>
);

};
