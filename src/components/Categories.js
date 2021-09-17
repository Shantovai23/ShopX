import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "../img/user.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Categories = () => {
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
      <div className='py-5'>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card border='light' className='card-shadow'>
              <div className='card-half'>
                <div>
                  {/* <i class="far fa-heart"></i> */}
                </div>
                <div className='card-second'>
                  <img src={img} alt="product-img" className='product-img' />
                </div>
              </div>

              <div className='name-price'>
                 <p className='product-name'>Lava Vtase</p>
                 <p className='product-price'>$50.00</p>
              </div>
              <hr className="categories-hr"/>
                <div className='cart-div'>
                <ShoppingCartOutlinedIcon />
                <span>ADD TO CART</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Categories;
