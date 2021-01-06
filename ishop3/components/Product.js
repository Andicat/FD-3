import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        cbDelete: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        cbSelect: PropTypes.func.isRequired,
    };

    changeProduct = (EO) => {
        console.log(this.props.code);
        switch (EO.target.type) {
            case 'button':
                this.props.cbDelete(this.props.code);
            break;
        default:
            this.props.cbSelect(this.props.code);
        };
    };

    render() {
        console.log(this.props);
        return this.props.isDeleted ? null : DOM.div({key:this.props.code,className:this.props.isSelected?'Product Product--selected':'Product',onClick:this.changeProduct},
            DOM.img({className:'Product__photo', src: this.props.photo, alt:this.props.photo, width:'60px', height:'60px'}),  
            DOM.span({className:'Product__title'},this.props.title),  
            DOM.span({className:'Product__price'},this.props.price),
            DOM.span({className:'Product__count'},this.props.count),
            DOM.button({className:'Product__button',type:'button'},'delete'),
        );
    }
}

export default Product;