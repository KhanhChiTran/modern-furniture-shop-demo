import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../firebase/firebaseAdmin";

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

export const onStartSignUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    return new Promise((resovle, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => resovle({ email: user.email, uid: user.uid }))
        .catch((err) => reject(err));
    });
    // console.log(
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    // );
    // const user = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((user) => console.log(user))
    //   .catch((err) => console.log(err));

    // console.log(user);
    // return user.todo;
  }
);
const initialState = {
  user: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(onStartSignUp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(onStartSignUp.fulfilled, (state, { email, uid }) => {
        state.user = email;
        state.status = "done";
      })
      .addCase(onStartSignUp.rejected, (state, { error }) => {
        state.user = error.code;
        state.status = "fail";
      });
  },
});

// export  { onStartSignUp } = userSlice.actions;
export default userSlice.reducer;
