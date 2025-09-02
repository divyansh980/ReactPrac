/**
 * The UserContext component creates a context with user data and provides it to its children
 * components.
 * @returns The `UserContext` component is being returned, which wraps its children with a
 * `DataContext.Provider` component. The `userData` object containing information like username, age,
 * city, and college is provided as the value to the `DataContext.Provider`.
 */

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
