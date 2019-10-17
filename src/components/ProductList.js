import React, { Component } from 'react';
import Product from "./Product";
import { ProductConsumer } from '../context';
import Pagination from 'react-bootstrap/Pagination';
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="container-fulid">
  <div className="col-md-auto">
    
    <Carousel>
  <Carousel.Item  >
    <img
     width={1360} height={350} alt="1400x300" src="//laz-img-cdn.alicdn.com/images/ims-web/TB1xA2BdUT1gK0jSZFhXXaAtVXa.jpg_1200x1200q75.jpg_.webp"
    />
  </Carousel.Item>
            
  <Carousel.Item>
    <img
        width={1360} height={350} alt="1400x400" src="//laz-img-cdn.alicdn.com/images/ims-web/TB1so9tdUT1gK0jSZFhXXaAtVXa.jpg_1200x1200q75.jpg_.webp"
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
        width={1360} height={350} alt="1400x400" src="https://salt.tikicdn.com/cache/w885/ts/banner/41/87/e1/8b79380354940552fbe58c60f80f850b.jpg"
    />
  </Carousel.Item>
</Carousel>
            </div>
            </div>
               <div className="py-4">
               <div className="container-fulid">
                <div className="col-md-auto">
                
               <Link to="/details"><img width={450} height={80} src="https://cdn.tgdd.vn/2019/09/banner/sticky-oppo-a5s-390x80.png" /></Link>
               <Link to="#"><img width={440} height={80} src="https://cdn.tgdd.vn/2019/08/banner/390-80-390x80-(2).png"  /></Link>
               <Link to="#"><img width={429} height={80} src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/12/637012028548929466_Banner-S10e-H2-2X.png"/></Link>
               </div>
               </div>
               <div className="container">
               <div className="row">
                   <ProductConsumer>
                       {value => {
                           return value.products.map(product =>{
                               return <Product key={product.id} product={product}/>;
                           });
                       }}
                </ProductConsumer>
                <Pagination className="container">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Item active>{7}</Pagination.Item>
                    <Pagination.Item>{8}</Pagination.Item>
                    <Pagination.Item disabled>{9}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{16}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
               </div>
               </div>
               </div> 
            </React.Fragment>
            // 
        );
    }
}