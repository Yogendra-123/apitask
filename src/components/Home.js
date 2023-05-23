
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] =useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(response=>response.json())
      .then(json =>setData(json))
      .catch(err=>console.log(err))
    },[])
const nextPage = () =>{
    navigate('/next')
}
    
  
    return (
    <div>
    <h1>Products List</h1>
      {
        data?.products?.slice(0,10).map((item, index)=>{
          return(
            <div key={index}>
              <h1>id -{item.id}</h1>
              <h1>title -{item.title}</h1>
              <p>description- {item.description}</p>
            </div>
          )
        })
      }
    <button onClick={nextPage}>Next</button>
      
    </div>
      )
    
  }
  
export default Home