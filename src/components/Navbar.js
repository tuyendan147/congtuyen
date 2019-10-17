import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from "../logo.png";
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import { ProductConsumer } from "../context";


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'All',
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch = event => {
        const el = event.target;
        this.setState({
            searchText: el.value,
        });
    }

    render(){
        const { searchText } = this.state;
        return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.icons/939737/html5_icon_•_html_icon Creative
                Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk  */}
            <Link to="/">
                <img src={logo} width="60px" height="60px" alt="store" className="navbar-brand" />
            </Link>   
            
            <ul>
               <div className="input-group">
               <select onChange={this.onSearch} className="selectpicker" >
                    <option value="ALL">All</option>
                    <option value="GOOGLE">Google</option>
                    <option value="SAMSUNG">SamSumg</option>
                    <option value="OPPO">Oppo</option>
                    <option value="IPHONE">Iphone</option>
                    <option value="HTC">HTC</option>
                </select>
                <ProductConsumer>   
                    {(value)=>(
                    <div className="input-group-append">
                        <button 
                            type="submit"
                            className="input-group-text bg-primary text-white"
                            onClick={() => value.getProductByCompany(searchText)}
                        >
                            <i className="fas fa-search" />
                        </button>
                    </div>
                    ) }
                </ProductConsumer>    
                </div>
            </ul>
        
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    Phone
                   </Link>   
                </li>
            </ul>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    Technology
                   </Link>   
                </li>
            </ul>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    Question
                   </Link>   
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    My cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        );
            }
        }

         const NavWrapper= styled.nav`
            background: var(--mainBlue);
            .nav-link {
                color: var(--mainWhite) !importain;
                font-size: 1.3rem;
                text-transform: capitalize;
            }
            .selectpicker{
                width:500px;
            }
         `;