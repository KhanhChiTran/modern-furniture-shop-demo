import React, { useRef, useState } from "react";

import firebase from "../../firebase/firebaseAdmin";

import { store } from "../../redux/store";

const Registration = () => {
  const [err, setErr] = useState(null);
  const [todos, setTodos] = useState([]);
  const emailRef = useRef();
  const passRef = useRef();
  const onStartSignUp = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "ADD_TODO",
      text: " hello this a text",
    });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(
    //     emailRef.current.value,
    //     passRef.current.value
    //   )
    //   .then((user) => console.log(user))
    //   .catch((err) => {
    //     if (err.code === "auth/weak-password") {
    //       setErr("Ur password to short");
    //     }
    //     console.log(err);
    //   });
  };
  store.subscribe(() => {
    const x = store.getState();
    setTodos(x);
  });
  console.log(store);

  return (
    <div>
      <h1>This is signup</h1>
      <form onSubmit={onStartSignUp}>
        <input ref={emailRef} type="email" placeholder="Enter ur email" />
        <input ref={passRef} type="password" placeholder="ur password" />
        {err && err}

        <input type="submit" value="Registration" />
        {todos.map((item, i) => (
          <p key={i}> {item} </p>
        ))}
      </form>
    </div>
  );
};

export default Registration;
