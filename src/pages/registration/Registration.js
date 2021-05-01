import React from "react";
import Layout from "../../components/layout/Layout";

const Registration = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("hehehe");
  };
  return (
    <Layout>
      <h1>Registraion</h1>

      <form onSubmit={handleRegistration}>
        <input type="email" placeholder="ur email" />
        <input type="password" placeholder="Ur password" />
        <button type="submit">Registraion</button>
      </form>
    </Layout>
  );
};

export default Registration;
