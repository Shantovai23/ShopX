import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "../img/user.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { ProductsContext } from "../global/Products";

const Categories = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <Container>
      <div className="categories">
        <span>ALL</span>
        <span>ELECTRONICS</span>
        <span>JEWELERY</span>
        <span>MEN'S</span>
        <span>WOMEN'S</span>
      </div>
      <hr className="categories-hr" />
      <div className="py-5">
        <Row>
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                  <Card border="light" className="card-shadow my-2">
                    <div className="card-half">
                      <div></div>
                      <div className="card-second">
                        <img
                          src={product.image}
                          alt="product-img"
                          className="product-img"
                        />
                      </div>
                    </div>
                    <div className="name-price">
                      <p className="product-name">
                        {product.title.substr(0, 25)}...
                      </p>
                      <p className="product-price">${product.price}.0</p>
                    </div>
                    <hr className="categories-hr" />
                    <div className="cart-div">
                      <ShoppingCartOutlinedIcon />
                      <span>ADD TO CART</span>
                    </div>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h4 className="text-center">Loading...</h4>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Categories;
