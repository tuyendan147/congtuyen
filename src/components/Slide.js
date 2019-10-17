import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
export default class Slide extends Component {
    render(){
        return(
  <div className="container">
  <div className="col-md-auto">
    
    <Carousel>
  <Carousel.Item  >
  <img src="http://placehold.it/250x250" alt="Image" width={158} height={158}/>

  <img src="http://placehold.it/250x250" alt="Image" width={158} height={158} />
  <img src="http://placehold.it/250x250" alt="Image" width={158} height={158}/>
  <img src="http://placehold.it/250x250" alt="Image" width={158} height={158}/>
  <img src="http://placehold.it/250x250" width={158} height={158}/>
 
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
           
        );
    }
}