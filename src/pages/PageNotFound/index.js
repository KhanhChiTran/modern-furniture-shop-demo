import React from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
export default function FageNotFound() {
  return (
    <Layout>
      <h1>
        Oppps Page not found <Link to="/">Back to Home </Link>{" "}
      </h1>
    </Layout>
  )
}
