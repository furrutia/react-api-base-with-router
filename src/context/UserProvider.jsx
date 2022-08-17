import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 'sdanlkjnseldkj',
//     name: 'Fede',
//     active: true
// }

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {
                children
            }
        </UserContext.Provider>
    )
}