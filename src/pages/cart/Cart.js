import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

export default function Cart() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [item, setItem] = useState([]);
  return <Layout>Cart</Layout>;
}
