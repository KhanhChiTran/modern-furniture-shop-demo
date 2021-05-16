import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { onStartSignUp } from "../../redux/userSlice"

const Registration = () => {
  const [err, setErr] = useState(null)
  const [todos, setTodos] = useState([])

  const dispatch = useDispatch()
  const state = useSelector(state => state.user)

  const emailRef = useRef()
  const passRef = useRef()
  const startSignUp = e => {
    e.preventDefault()
    dispatch(
      onStartSignUp({
        email: emailRef.current.value,
        password: passRef.current.value,
      })
    )
  }
  console.log(state)

  return (
    <div>
      <h1>This is signup</h1>
      <form onSubmit={startSignUp}>
        <input ref={emailRef} type="email" placeholder="Enter ur email" />
        <input ref={passRef} type="password" placeholder="ur password" />
        {err && err}

        <input type="submit" value="Registration" />
        {todos.map((item, i) => (
          <p key={i}> {item} </p>
        ))}
      </form>
    </div>
  )
}

export default Registration
