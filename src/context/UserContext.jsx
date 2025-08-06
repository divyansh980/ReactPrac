
import { createContext } from 'react'


export const DataContext = createContext()

const UserContext = ({children}) => {

    // const username = "Divyansh"
    const userData = {
        username :"Divyansh Gupta",
        age : 22,
        city : "Delhi" ,
        college: "saitm"
    }
  return (
    <div>
    <DataContext.Provider value={userData}>
       {children}
       </DataContext.Provider>
    </div>
  )
}

export default UserContext
