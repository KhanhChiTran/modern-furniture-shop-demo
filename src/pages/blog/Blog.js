import React from "react";
import Layout from "../../components/Layout/Layout";
import "./blog.scss";
import Carousel from "../../components/ProductCarousel/Carousel";
import ImgCard from "../../components/Card/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Blog() {
  return (
    <Layout>
      <Container maxWidth="fixed" style={{ backgroundColor: "antiquewhite" }}>
        <h1 className="blog-heading">MiNi Living Weekly</h1>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Carousel />
          </Grid>
          {/* <Typography
          component="div"
          style={{ backgroundColor: "orange", height: "100vh" }}
        /> */}
          <Grid item xs={6}>
            <ImgCard url="https://static.wixstatic.com/media/0beb7e_1ec0d481fe9c4045b32631e2c3834cff~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/0beb7e_1ec0d481fe9c4045b32631e2c3834cff~mv2.webp" />
          </Grid>
          <Grid item xs={6}>
            <ImgCard url="https://static.wixstatic.com/media/0beb7e_8a39eef2e2fd492b86dc8a806617f00c~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/0beb7e_8a39eef2e2fd492b86dc8a806617f00c~mv2.webp" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
