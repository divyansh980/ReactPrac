// import React ,{useState} from "react";

// const App = () => {
// // const a = 10

// const [a,setA] = useState(20)

// const changeA =() =>{
//         console.log("chal gya")
//         setA(50)
// }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>

//       <button onClick={changeA} class="button"> Change User</button>
//     </div>
//   );
// };

// export default App;


// import React,{useState} from 'react'

// const App = () => {
// const [num, setNum] = useState(0);

//         return(
//                 <div>
//                         <h3>Number is {num}</h3>
//                         <button onClick={()=> setNum (num+10)} class="button">Increase Value</button>
//                         <button onClick= {()=>setNum(num - 10)} class="button">Decrease Value</button>
//                 </div>
//         )
// }

// export default App


// from handler start here
// two way binding in react 
// import React,{useState} from 'react'

// const App = () => {

       
//         const [username, setUsername] = useState('')

//         const submitHandler = (e) => {
//                 e.preventDefault()
//                 console.log(username);
//                 setUsername('')
                
//         }
//         return(
//                 <div>
//                       <form onSubmit = {(e)=>{
//                         submitHandler(e)
//                       }}>
//                         <input 
//                         value={username}
//                         onChange={(e)=>{
//                                 setUsername(e.target.value)
//                         }}  
//                         className='px-4 py-3 rounded text-xl m-5' type="text" placeholder="Enter your name"></input>
//                         <button className='px-4 py-3 text-white m-5 font-semibold bg-emerald-600 rounded'>
//                                 Submit
//                         </button>
//                       </form>
//                 </div>
//         )

// }

// export default App

// from handler end here






// Componets


import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
        return(
                <>
                    <nav className='bg-emerald-950  flex py-4 px-10 items-center justify-between'>
                        <Navbar/>
                    </nav>
                </>
        )


}

export default App