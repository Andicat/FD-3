import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';

import Product from './Product';
import ProductCard from './ProductCard';

class Shop extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        products:PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                photo: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ),
    };

    static defaultProps = {
        title: 'Какой-то интернет-магазин',
        products: [],
    };

    state = {
        selectedProduct: null,
        IsEditProduct: false,
        IsNewProduct: false,
        IsChangeProduct: false,
        productsToShow:this.props.products.slice(),
    }

    deleteProduct = (code,title) => {
        var isConfirmed = confirm('Удалить ' + title + ' из списка товаров?');
        if (isConfirmed) {
            this.setState( {selectedProduct:code, productsToShow:this.state.productsToShow.filter( v => v.code!=code)} );
        }
    };

    selectProduct = (code) => {
        this.setState( {selectedProduct:code} );
    };

    changeProduct = () => {
        this.setState( {IsChangeProduct:true} );
    }

    editProduct = (code,mode) => {
        this.setState( {selectedProduct:code, IsEditProduct:mode, IsNewProduct:false, IsChangeProduct:false} );
    };

    saveProduct = (code,info) => {
        if (this.state.IsNewProduct) {
            this.setState( {productsToShow:[...this.state.productsToShow,{code,...info}]});    
        } else {
            this.setState( {productsToShow:this.state.productsToShow.map( v => { return (v.code==code)? v = {code,...info}:v; })} );
        }
        this.setState( {IsEditProduct:false, IsNewProduct:false, IsChangeProduct:false} );
    };

    newProduct = () => {
        this.setState( {IsEditProduct:true, selectedProduct:false, IsNewProduct:true} );
    };

    render() {

        var productsCode=[];
        var card=null;

        var productsTableTitleCode = 
            <div className='products__title'>
                <span className='titleName'>Product</span>
                <span className='titlePrice'>Price</span>
                <span className='titleQuantity'>Quantity</span>
            </div>;
        this.state.productsToShow.forEach( v => {
            productsCode.push(<Product key={v.code} photo={v.photo} title={v.title} code={v.code} price={v.price} quantity={v.quantity}
                cbDelete={this.deleteProduct}
                cbSelect={this.selectProduct}
                cbEdit={this.editProduct}
                isSelected={v.code===this.state.selectedProduct? true:false}
                isEdit={this.state.IsEditProduct}
                isNew={this.state.IsNewProduct}
                isChange={this.state.IsChangeProduct}/>);
            if (this.state.selectedProduct==v.code) {
                card = <ProductCard key={v.code} photo={v.photo} title={v.title} code={v.code} price={v.price} quantity={v.quantity} 
                isEdit={this.state.IsEditProduct} isNew={this.state.IsNewProduct}
                cbCancel={this.editProduct}
                cbSave={this.saveProduct}
                cbChange={this.changeProduct}/>;
            };
        });

        if (this.state.IsNewProduct) {
            var newCode = this.state.productsToShow.reduce(function (r, v) { return ( r < v.code ? v.code : r);},0) + 1;
            card = <ProductCard key={newCode} code={newCode} isEdit={this.state.IsEditProduct} isNew={true}
            cbCancel={this.editProduct}
            cbSave={this.saveProduct}
            cbChange={this.changeProduct}/>;
        };

        return (
            <div className='shop'>
                <div className='shop__title'>{this.props.title}</div>
                <div className='shop__table'>
                    <div className='products'>{productsTableTitleCode}{productsCode}</div>
                    <button className='product__button shop__add' type='button' onClick={this.newProduct} disabled={this.state.IsEditProduct}>new product</button>
                </div>
                {card}
            </div>
        )
    }
}

export default Shop;