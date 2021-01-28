﻿import React from 'react';
import PropTypes from 'prop-types';

import Client from './Client';
import ProductCard from './ProductCard';

class Company extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                lastName: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                midName: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                activity: PropTypes.string.isRequired,
            })
        ),
    };

    static defaultProps = {
        name: 'Velcom',
        clients: [],
    };

    state = {
        name: this.props.name,
        showActive: '',
        //IsEditProduct: false,
        //IsNewProduct: false,
        //IsChangeProduct: false,
        clientsToShow:this.props.clients.slice(),
    }

    setCompanyName = (name) => {
        this.setState({name:name});
    }

    setFilter = (activity) => {
        this.setState({showActive:activity, clientsToShow: this.props.clients.filter(c => activity!=""?c.activity==activity:true)});
    }

    /*deleteProduct = (code,title) => {
        var isConfirmed = confirm('Удалить ' + title + ' из списка товаров?');
        if (isConfirmed) {
            this.setState( {selectedProduct:null, clientsToShow:this.state.clientsToShow.filter( v => v.code!=code)} );
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
            this.setState( {clientsToShow:[...this.state.clientsToShow,{code,...info}]});    
        } else {
            this.setState( {clientsToShow:this.state.clientsToShow.map( v => { return (v.code==code)? v = {code,...info}:v; })} );
        }
        this.setState( {IsEditProduct:false, IsNewProduct:false, IsChangeProduct:false} );
    };

    newProduct = () => {
        this.setState( {IsEditProduct:true, selectedProduct:false, IsNewProduct:true} );
    };*/

    render() {

        console.log(`Company render`);

        var card=null;

        var clientsTableTitleCode = 
            <div className='company__table-title'>
                <span className='titleLastName'>Фамилия</span>
                <span className='titleName'>Имя</span>
                <span className='titleMIdName'>Отчество</span>
                <span className='titleBalance'>Баланс</span>
                <span className='titleActivity'>Активность</span>
                <span className='titleEdit'>Редактировать</span>
                <span className='titleDelete'>Удалить</span>
            </div>;

        var clientsCode=this.state.clientsToShow.map( c =>
            <Client key={c.id} client={c}/>
        );
        /*this.state.clientsToShow.forEach( v => {
            clientsCode.push(<Client key={v.id} client={v}/>);
            /*if (this.state.selectedProduct==v.code) {
                card = <ProductCard key={v.code} photo={v.photo} title={v.title} code={v.code} price={v.price} quantity={v.quantity} 
                isEdit={this.state.IsEditProduct} isNew={this.state.IsNewProduct}
                cbCancel={this.editProduct}
                cbSave={this.saveProduct}
                cbChange={this.changeProduct}/>;
            };
        });*/

        /*if (this.state.IsNewProduct) {
            var newCode = this.state.clientsToShow.reduce(function (r, v) { return ( r < v.code ? v.code : r);},0) + 1;
            card = <ProductCard key={newCode} code={newCode} isEdit={this.state.IsEditProduct} isNew={true}
            cbCancel={this.editProduct}
            cbSave={this.saveProduct}
            cbChange={this.changeProduct}/>;
        };*/

        return (
            <div className='company'>
                <div className='company__name'>
                    <input type="button" value="МТС" onClick={this.setCompanyName.bind(this,"МТС")}/>
                    <input type="button" value="Velcom" onClick={this.setCompanyName.bind(this,"Velcom")}/>
                    <h2>Компания: {this.state.name}</h2>
                </div>
                <div className='company__filter'>
                    <input type="button" value="Все" onClick={this.setFilter.bind(this,"")} />
                    <input type="button" value="Активные" onClick={this.setFilter.bind(this,"active")} />
                    <input type="button" value="Заблокированные" onClick={this.setFilter.bind(this,"blocked")} />
                </div>
                <div className='company__table'>
                    {clientsTableTitleCode}
                    {clientsCode}
                </div>
                <input className='company__add'type="button" value="Добавить клиента" onClick={this.addClient} />
            </div>
        )
    }
}

export default Company;