import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Next = () => {
    const navigate = useNavigate();
    const [data, setData] =useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(response=>response.json())
      .then(json =>setData(json))
      .catch(err=>console.log(err))
    },[])
    
  
    return (
    <div>
    <h1>Products Page 2</h1>
      {
        data?.products?.slice(10,19).map((item, index)=>{
          return(
            <div key={index}>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
            </div>
          )
        })
      }
      <button onClick={()=>navigate('/')}>Prev</button>
    <button onClick={()=>navigate('/nextpage')}>Next</button>
      
    </div>
      )
    
}

export default Next