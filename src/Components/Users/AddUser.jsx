import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
 const nameInputRef = useRef();
 const ageInputRef = useRef();
 const collegeInputRef = useRef();

  const [error, setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const collegeName = collegeInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || collegeName.trim().length ===0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }

    if (+enteredUserAge < 18) {
      setError({
        title: "invalid Age",
        message: "Please enter age(>18)."
      })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, collegeName);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
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
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            step=".5"
            ref={ageInputRef}
          />
           <label htmlFor="college">College Name</label>
          <input
            type="text"
            id='college'
            ref={collegeInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
