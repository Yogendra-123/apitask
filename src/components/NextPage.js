import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const NextPage = () => {
    const navigate = useNavigate()
    const [data, setData] =useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(response=>response.json())
      .then(json =>setData(json))
      .catch(err=>console.log(err))
    },[])
    
  
    return (
    <div>
    <h1>Products Page 3</h1>
      {
        data?.products?.slice(20,29).map((item, index)=>{
          return(
            <div key={index}>
              <h1>id - {item.id}</h1>
              <h1>title -{item.title}</h1>
              <p>description -{item.description}</p>
            </div>
          )
        })
      }
    <button onClick={()=>navigate('/next')}>Previous</button>
      
    </div>
      )
    
}

export default NextPage