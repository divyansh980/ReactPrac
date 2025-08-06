import React ,{useState} from "react";

const App = () => {
// const a = 10

const [a,setA] = useState(20)

const changeA =() =>{
        console.log("chal gya")
        setA(50)
}

  return (
    <div>
      <h1>Value of a is {a}</h1>

      <button onClick={changeA} class="button"> Change User</button>
    </div>
  );
};

export default App;
// ======================================================================







// ======================================================================
import React,{useState} from 'react'

const App = () => {
const [num, setNum] = useState(0);

        return(
                <div>
                        <h3>Number is {num}</h3>
                        <button onClick={()=> setNum (num+10)} class="button">Increase Value</button>
                        <button onClick= {()=>setNum(num - 10)} class="button">Decrease Value</button>
                </div>
        )
}

export default App
// ======================================================================




// ======================================================================

// from handler start here
// two way binding in react 
import React,{useState} from 'react'

const App = () => {

       
        const [username, setUsername] = useState('')

        const submitHandler = (e) => {
                e.preventDefault()
                console.log(username);
                setUsername('')
                
        }
        return(
                <div>
                      <form onSubmit = {(e)=>{
                        submitHandler(e)
                      }}>
                        <input 
                        value={username}
                        onChange={(e)=>{
                                setUsername(e.target.value)
                        }}  
                        className='px-4 py-3 rounded text-xl m-5' type="text" placeholder="Enter your name"></input>
                        <button className='px-4 py-3 text-white m-5 font-semibold bg-emerald-600 rounded'>
                                Submit
                        </button>
                      </form>
                </div>
        )

}

export default App

// from handler end here
// ======================================================================




// ======================================================================


// Componets

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
        return(
                <>                  
                        <Navbar/>
                        
                        <Footer/>                     
                     
                </>
        )
}
export default App

// components end here 
// ======================================================================











// ======================================================================

import React from 'react'
import Cards from './components/Cards'


const App = () => {

const user = " Divyansh"
const num = 10
        return(
                <>                  
                  <Cards a = {user}/>
                  <Cards a ='Gupta'/>
                </>
        )
}
export default App


// ======================================================================





// =====================================================

import React from 'react'
import Cards from './components/Cards'


const App = () => {

const users =[
  {
    "name": "Alice Johnson",
    "city": "New York",
    "age": 28,
    "profession": "Software Engineer",
    "profilePhoto": "https://example.com/photos/alice.jpg"
  },
  {
    "name": "Brian Smith",
    "city": "Los Angeles",
    "age": 34,
    "profession": "Graphic Designer",
    "profilePhoto": "https://example.com/photos/brian.jpg"
  },
  {
    "name": "Catherine Lee",
    "city": "Chicago",
    "age": 25,
    "profession": "Marketing Specialist",
    "profilePhoto": "https://example.com/photos/catherine.jpg"
  },
  {
    "name": "David Kim",
    "city": "Houston",
    "age": 30,
    "profession": "Data Analyst",
    "profilePhoto": "https://example.com/photos/david.jpg"
  },
  {
    "name": "Emily Brown",
    "city": "Miami",
    "age": 27,
    "profession": "Product Manager",
    "profilePhoto": "https://example.com/photos/emily.jpg"
  }
]

// users.forEach(function(elem){
//         console.log(elem)
// })

// users.map(function(){

//         return "hey"
// })




        return(
                <>                  
                  <div className='p-10'>
                       {users.map(function(elem,idx){
                                return <Cards key={idx} username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photu={elem.profile_photo}/>
                       })}
                  </div>
                </>
        )
}
export default App




// =======================================



import React from 'react'
import Ex from './components/Ex'


const App =() => {
        return (
                <div>
                        <Ex name="Divyansh Gupta"/>
                </div>
        )
}

export default App

// ============================================







// ================================================= 

import React, { useState,useEffect } from 'react'
import axios from 'axios'

const App =  () =>{

const [data, setData] = useState([])

const getData = async ()  => {
        const response = await axios.get('https://picsum.photos/v2/list')
        // console.log(response.data)
        setData(response.data)
        
}


// for fetch automatically data (API)
useEffect (() => {
        getData()
},[])

        return (
               
                <div className='p-10'>
                <button onClick={getData} className='bg-pink-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
                <div className='p-5 mt-5 bg-gray-950'>
                        {data.map(function(elem, idx){
                                return <div key={idx} className='bg-gray-50 text-black flex item-center w-full justify-between px-7 py-6 rounded mb-2'>
                                      <img className='h-40' src={elem.download_url} alt=""/>  
                                      <h1>{elem.author}</h1>

                                </div>
                        })}
                </div>
                </div>
                

        )
}
export default App



// ================================================













// =================================================//

// React Routing DOM
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Header from './components/Header'


const App = () => {
  return (
    <div>
    <Header/>
        <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                 <Route path='/product' element={<Product/>}/>
                 
        </Routes>
    </div>
  )
}

export default App


// ======================================================================


// Context API 

import React, { useContext } from 'react'
import Header2 from './components/Header2'
import Section from './components/Section'
import Footer2 from './components/Footer2'
import UserContext, { DataContext } from './context/UserContext'

const App = () => {
        const data = useContext(DataContext)
        // console.log(data)
  return (
    <div>
       <h1>This is App.js {data.username}</h1>
       <Header2/>
       <Section/>
       <Footer2/>
    </div>
  )
}

export default App
