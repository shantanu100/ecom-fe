import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h2" align="center" style={{ margin: "20px 0" }}>
        Welcome to Our E-Commerce Store
      </Typography>
      <Grid container spacing={3} >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card  style={{ height: '100%'}}>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography component="div">
                  <p>
                    <b>Ceteogry: </b>
                    {product.category}
                  </p>
                </Typography>
                <Typography color="textSecondary">
                    <p><b>Price:</b>${product.price}</p></Typography>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default HomePage;
