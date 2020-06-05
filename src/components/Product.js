import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeProduct} from "./actions/productActions";
 
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };
 
    addToCart = (e) => {
 
        e.preventDefault();
 
        this.props.addToCart(this.props.product)
 
        this.setState({
            inCart: true
        })
    }
	 
    handleRemove = (e) => {
		console.log(this.props);
        this.props.removeProduct(this.props.product.id);
    }
 
    render() {
 
        const { product } = this.props;
 
        return (
		<fragment>
            <div className="col-md-12" className="row">
                <figure className="card card-product" className="col-md-12">
                    <div className="img-wrap" className="col-md-3">
                        <img className="img-responsive" src={product.image} />
                    </div>
					<div className="img-wrap" className="col-md-3">
                        <h4 className="title">{product.title}</h4>
                    </div>
                    <figcaption className="info-wrap"  className="col-md-4">
                        <p className="desc">{product.description}</p>
                    </figcaption>
					<div className="col-md-2">
					<form onSubmit={this.handleSubmit}>
						<div className="col-xs-2">
						  <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
							  <span className="glyphicon glyphicon-trash"> </span>
						  </button>
						</div>
					</form>
				</div>
                </figure>
            </div>
			<hr/>
			</fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
 
    return {
        removeProduct: (productId) => dispatch(removeProduct(productId))
    }
};
 
export default connect(null, mapDispatchToProps)(Product);