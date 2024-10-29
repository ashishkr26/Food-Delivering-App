import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Defauly User"
})

export default UserContext