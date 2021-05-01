import React from "react";
import Layout from "../../components/layout/Layout";

import Helmet from "react-helmet";
const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found | ChiTran a Demo Ecommerce Website</title>
      </Helmet>
      <h1>Page not found ..... </h1>
    </Layout>
  );
};

export default PageNotFound;
