import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
  const [enteredname, setEnteredname] = useState("")
  const [enteredAge, setEnteredage] = useState("")
  const [error, setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredname.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }

    if (+enteredAge < 18) {
      setError({
        title: "invalid Age",
        message: "Please enter age(>18)."
      })
      return;
    }
    props.onAddUser(enteredname, enteredAge);
    setEnteredname("");
    setEnteredage("");
  }

  const usernameChangeHandler = (event) => {
    setEnteredname(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredage(event.target.value);
  }
  
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && < ErrorModal title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id='username'
            onChange={usernameChangeHandler}
            value={enteredname}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            step=".5"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser