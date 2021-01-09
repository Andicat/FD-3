import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {

    static propTypes = {
        isEdit: PropTypes.bool.isRequired,
        isNew: PropTypes.bool.isRequired,
        code: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        cbCancel: PropTypes.func.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        title: "",
        photo: "",
        price: 0,
        quantity: 0,
    };

    constructor(props) {
        super(props);
        this.state = {isValid: !this.props.isNew,
            isNameValid: !this.props.isNew,
            isPhotoValid: !this.props.isNew,
            isPriceValid: !this.props.isNew,
            isQuantityValid: !this.props.isNew,
        }
    }

    state = {
        isEdit: true,
        isValid: true,
        isChanged: false,
        isNameValid: true,
        isPhotoValid: true,
        isPriceValid: true,
        isQuantityValid: true,
    }

    checkField = (evt) => {
        var val = evt.target.value;
        var field = evt.target.name;
        var res;
        switch (field) {
          case 'title':
            res = (val.length === 0) ? false : true;
            this.setState({isNameValid:res},this.checkValidCard); 
            break;
        case 'photo':
            res = (val.length === 0) ? false : true;
            this.setState({isPhotoValid:res},this.checkValidCard); 
            break;
        case 'price':
            res = (Number(val) > 0) ? true : false;
            this.setState({isPriceValid:res},this.checkValidCard); 
            break;
        case 'quantity':
            res = (Number(val) > 0 ) ? true : false;
            this.setState({isQuantityValid:res},this.checkValidCard); 
            break;
        default:
            true;
        }
    };

    checkValidCard = () => {
        var res = this.state.isNameValid && this.state.isPhotoValid && this.state.isPriceValid && this.state.isQuantityValid;
        this.setState({isValid:res});
        if (!this.state.isChanged) {
            this.setState({isChanged:true},this.props.cbChange());
        }
    };

    save = () => {
        var newInfo = {
            title: this.title.value,
            photo: this.photo.value,
            price: Number(this.price.value),
            quantity: Number(this.quantity.value),
        };
        this.props.cbSave(this.props.code,newInfo); 
    }

    cancel = () => {
        this.setState({isValid:true},this.props.cbCancel(false)); 
    }

    render() {
        if (this.props.isEdit) {
            return (
                <div className='productCard ProductCard--edit'>
                    <span className='productCard__title'>{((this.props.isNew)?'Add new':'Edit') + ' product'}</span>
                    <div className={'productCard__field' + (!this.state.isNameValid?' productCard__field--error':'')}>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' name='title' id='title' defaultValue={this.props.title} onChange={this.checkField} ref={(f) => this.title = f} required/>
                        <span className='productCard__error'>Invalid value. Must be a string.</span>
                    </div>
                    <div className={'productCard__field' + (!this.state.isPhotoValid?' productCard__field--error':'')}>
                        <label htmlFor='photo'>Photo URL:</label>
                        <input type='text' name='photo' id='photo' defaultValue={this.props.photo} onChange={this.checkField} ref={(f) => this.photo = f} required/>
                        <span className='productCard__error'>Invalid value. Must be a string.</span>
                    </div>
                    <div className={'productCard__field' + (!this.state.isPriceValid?' productCard__field--error':'')}>
                        <label htmlFor='price'>Price:</label>
                        <input type='text' name='price' id='price' defaultValue={this.props.price} onChange={this.checkField} ref={(f) => this.price = f} required/>
                        <span className='productCard__error'>Invalid value. Must be a number.</span>
                    </div>
                    <div className={'productCard__field' + (!this.state.isQuantityValid?' productCard__field--error':'')}>
                        <label htmlFor='quantity'>Quantity:</label>
                        <input type='text' name='quantity' id='quantity' defaultValue={this.props.quantity} onChange={this.checkField} ref={(f) => this.quantity = f} required/>
                        <span className='productCard__error'>Invalid value. Must be a number.</span>
                    </div>
                    <div className='productCard__field'>
                        <button className='product__button' type='button' onClick={this.save} disabled={!this.state.isValid}>{((this.props.isNew)?'Add':'Save')}</button>
                        <button className='product__button' type='button' onClick={this.cancel}>cancel</button>
                    </div>
                </div>
            );    
        }
        return (
            <div className='productCard'>
                <span className='productCard__title'>{this.props.title}</span>
                <img className='productCard__photo' src= {this.props.photo} alt={this.props.photo}/>
                <span className='productCard__price'>Price: {this.props.price}</span>
                <span className='productCard__quantity'>Quantity: {this.props.quantity}</span>
            </div>
        );
    }
}

export default ProductCard;