import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {addToCart} from "../components/actions/cartActions";

 
 
class ProductList extends Component
{
    constructor(){
		super();

		this.state={
		  search:null
		};
	}
	searchSpace=(event)=>{
		let keyword = event.target.value;
		this.setState({search:keyword});
	}
	  
	addToCart = (product) => {
        this.props.addToCart(product);
    }
	
    render() {
	const items = this.props.products.filter((data)=>{
      if(this.state.search == null){
		  //console.log('first');
          return data
      }else if(data.title.toLowerCase().includes(this.state.search.toLowerCase())){
		  //console.log(data);
          return data;
      }
    }).map(data=>{
      return data;
    });
        return (
            <div className="container">
                <h2>Product List</h2>
				<input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
				<hr/>
                <div>
 
                    {
                        items.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )
                    }
 
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)