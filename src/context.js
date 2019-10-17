import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component{
    state ={
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

  
    
    componentDidMount() {
        this.setProducts();
        this.setState({unified : !localStorage.getItem('myObject') 
        ? []
        : JSON.parse(localStorage.getItem('myObject')) })
    };
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(() => {
            return { products: tempProducts };
        })
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    
    handleDetail = id => {
        const product = this.getItem(id); 
        this.setState(()=>{
            return {detailProduct:product}
        })
     };

    getProductByCompany = text => {
        
        if (text === 'ALL') {
            let tempProducts = [];
            storeProducts.forEach(item =>{
                const singleItem = {...item};
                tempProducts = [...tempProducts,singleItem];
            })
            this.setState(() => {
                return { products: tempProducts };
            });
        } else {
            const products = this.state.products.filter(item => item.company === text);
            this.setState(() => {
                return { products };
            });
        }
        
    }

    
    addToCart= id => {
       let tempProducts = [...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;
    this.setState(
        ()=> {
            return { products: tempProducts, cart: [...this.state.cart,product] };
        },
        ()=> {
            this.addTotals();
            const unified = Object.assign({}, {cart: this.state.cart}, {subTotal: this.state.cartSubTotal})
            localStorage.setItem('myObject', JSON.stringify(unified))

        });
};
    
openModal = id =>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {modalProduct:product,modalOpen:true};
    });
};
closeModal= () =>{
    this.setState(()=>{
        return { modalOpen: false };
    });
};
increment = id => {
   let tempCart = [...this.state.cart];
   const selectedProduct = tempCart.find(item => item.id === id);

   const index = tempCart.indexOf(selectedProduct);
   const product = tempCart[index]; 

   product.count = product.count + 1;
   product.total = product.count * product.price;
   
   this.setState(
       () => {
           return { cart: [...tempCart] };
        },
        () => {
            this.addTotals();
        }
    );
};
decrement = id => {
   let tempCart = [...this.state.cart];
   const selectedProduct = tempCart.find(item=>item.id === id);
   
   const index = tempCart.indexOf(selectedProduct);
   const product = tempCart[index]; 

   product.count = product.count  - 1;

   if (product.count === 0){
       this.removeItem(id);
   } else {
       product.total = product.count * product.price ;
       this.setState(
            ()=> {
                return {cart: [...tempCart] };
            },
            () => {
                this.addTotals();
            }
       );
   }

};
removeItem = id =>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    
    this.setState(
        () => {
            return {
                cart: [...tempCart],
                product: [...tempProducts]
            };
        },
        () => {
            this.addTotals();
        }
    );
};
clearCart = () =>{
   this.setState(
       () =>{
    return { cart: [] };
   },
   () => {
       this.setProducts();
       this.addTotals();
   }
   );
};

addTotals = () =>{
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() =>{
        return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        };
    });
};
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                getProductByCompany: this.getProductByCompany,
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };