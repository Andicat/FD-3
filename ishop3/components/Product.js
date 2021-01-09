import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        cbDelete: PropTypes.func.isRequired,
        cbEdit: PropTypes.func.isRequired,
        cbSelect: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        isEdit: PropTypes.bool,
        isNew: PropTypes.bool,
        isChange: PropTypes.bool,
    };

    selectProduct = (evt) => {
        if (!this.props.isChange&&(evt.target.type!='button')) {
            this.props.cbEdit(this.props.code, false);
        }
    };

    deleteProduct = () => {
        this.props.cbDelete(this.props.code,this.props.title);
    };

    editProduct = () => {
        this.props.cbEdit(this.props.code, true);
    };

    render() {
        return (
            this.props.isDeleted ? null : (
                <div className={'product' + (this.props.isSelected?' product--selected':'')} onClick={this.selectProduct}  key={this.props.code}>
                    <img className='product__photo' src= {this.props.photo} alt={this.props.photo}/>
                    <span className='product__title'>{this.props.title}</span>
                    <span className='product__price'>{this.props.price}</span>
                    <span className='product__quantity'>{this.props.quantity}</span>
                    <button className='product__button' type='button' onClick={this.editProduct} disabled={this.props.isChange||this.props.isNew}>edit</button>
                    <button className='product__button' type='button' onClick={this.deleteProduct} disabled={this.props.isEdit}>delete</button>
                </div>
            )
        );
    }
}

export default Product;