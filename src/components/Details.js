import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { Carousel } from 'react-bootstrap';
export default class Details extends Component {
    render(){
        return (
          <ProductConsumer>
              {value => {
                  const {id,company,img,info,price,title,inCart,promotion} = value.detailProduct;
                  const { addToCart, openModal } = value;
                  return (
                      <div className="container py-5">
                        {/* title */}
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                        </div>
                        </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} width={540} height={540} className="img-fluid" alt="product"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model :{title}</h2>
                                <h4 className="text-title text-uppercase text-mutted mt-3 mb-2">
                                    made by: <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price : <span>$</span>{price}
                                    </strong>
                                </h4>
                                <h4>
                                    <strong>
                                        promotion price:<span>$</span>{promotion}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about product:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                {/* button */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart
                                    disabled={inCart?true:false}
                                    onClick={()=>{
                                        addToCart(id);
                                        openModal(id);
                                       
                                    }}
                                    >
                                        {inCart ? "inCart" : "add to card"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        <div>

<div className="container-fluid">

  <div className="col-md-auto">
      <h3><strong>Products</strong></h3>
    
    <Carousel>
  <Carousel.Item  >
  <Link to="/"><img src="img/product-12.png" alt="Image" /></Link>
  </Carousel.Item>  <Carousel.Item  >
  <Link to="/"><img src="img/product-13.png" alt="Image" /></Link>
  </Carousel.Item>
            
</Carousel>
            </div>
            </div>
                        </div>
                        </div>
                      </div>
                  )
              }}
          </ProductConsumer>
         
           
        );
    }
}