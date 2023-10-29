import React, { useState } from 'react'
import "./App.css"
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'

const App = () => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName,uAge, college) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name:uName , age: uAge, coll:college ,id:Date.now().toString()}]
  })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App