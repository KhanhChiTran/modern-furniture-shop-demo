import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onStartSignUp } from "../../redux/userSlice";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
}));

const Registration = () => {
  const [err, setErr] = useState(null);
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const emailRef = useRef();
  const passRef = useRef();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",

    showPassword: false
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const startSignUp = (e) => {
    e.preventDefault();
    dispatch(
      onStartSignUp({
        email: emailRef.current.value,
        password: passRef.current.value
      })
    );
  };
  console.log(state);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          background: "orange",
          width: "100%",
          //   height: "50px",
          marginBottom: "50px",
          textAlign: "center",
          paddingTop: "150px"
        }}
      >
        {" "}
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your account</p>
        <a href="/login">
          <Button
            style={{
              margin: "10px 0 150px 0",
              width: 250,
              padding: 10,
              background: "black"
            }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>{" "}
        </a>
      </div>
      <div className="wrap-register">
        <Grid
          style={{
            background: "#fcf9e8",
            marginBottom: "40px",
            paddingTop: "50px"
          }}
          container
          className={classes.root}
          spacing={2}
        >
          <h1>Register</h1>
          <Grid item xs={12} className={classes.root}>
            <Grid item xs={10} className={classes.root}>
              <p>
                {/* Please enter your account details to log in to your user account. */}
              </p>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                required
              >
                <InputLabel htmlFor="outlined-adornment-firstName">
                  First Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-firstName"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  labelWidth={70}
                />
              </FormControl>{" "}
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                required
              >
                <InputLabel htmlFor="outlined-adornment-lastName">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-lastName"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  labelWidth={70}
                />
              </FormControl>
            </Grid>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Button
            style={{
              margin: "10px 0 150px 0",
              width: 250,
              padding: 10,
              background: "orange"
            }}
            variant="contained"
            color="primary"
          >
            Create Account
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Registration;
