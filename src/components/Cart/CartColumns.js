import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
             <div className="row">
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">products</p>
                </div>  
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">Name of the product</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">promotion price</p>
                </div>
              
                
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">price</p>
                </div>
              
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-uppercase">remove</p>
                </div>
             </div>
         </div>
           );
}