import React from "react";
import Layout from "../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaGooglePlusG
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
export default function Contact() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "100px"
        }}
      >
        <div>
          <h1>Contact Us</h1>
          <FormControl style={{ display: "block" }} className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
            <Input
              id="input-with-icon-adornment"
              placeholder="Enter Your Name"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
            <Input
              id="input-with-icon-adornment"
              placeholder="Enter Your Email"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>

          <TextField
            id="outlined-multiline-static"
            // label="Your Text"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            style={{ display: "block", margin: "20px 0" }}
            placeholder="Enter Your Message"
          />
          <Button
            style={{ display: "block", margin: "20px 0", background: "orange" }}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
        <div style={{ background: "black", width: "40%", textAlign: "center" }}>
          <h3 style={{ color: "orange" }}>LOCATION</h3>
          <p>28 Jackson Bivd Ste 1020</p>
          <p>Chicago</p>
          <p>IL 60604-2340</p>
          <h3 style={{ color: "orange" }}>Follow Us</h3>
          <FaTwitter
            style={{ color: "orange", margin: "10px", cursor: "pointer" }}
          />
          <FaFacebookSquare
            style={{ color: "orange", margin: "10px", cursor: "pointer" }}
          />
          <FaInstagram
            style={{ color: "orange", margin: "10px", cursor: "pointer" }}
          />
          <FaGooglePlusG
            style={{ color: "orange", margin: "10px", cursor: "pointer" }}
          />
          <div
            style={{
              background: "orange",
              width: "100%",
              height: "50px",
              marginTop: "50px"
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}
