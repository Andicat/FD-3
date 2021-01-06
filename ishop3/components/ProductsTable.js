/*
На основе проекта ishop2 разработать проект ishop3 (интернет-магазин) в папке ishop3.
+Переработать проект для сборку под npm.
+Разбить проект на модули (каждый компонент в отдельном файле).
+Переработать описание классов компонентов на синтаксис ES6.
Использовать JSX.
+Перечень товаров вынести в JSON-файл.
Доработать поведение:
При щелчке на строку с товаром она не только выделяется цветом, но и снизу (или справа) от таблицы товаров отображается карточка товара.
В каждой строке с товаром — кнопки «редактировать» и «удалить». Ниже списка товаров — кнопка «новый».
По нажатию кнопки «редактировать» строка товара выделяется и карточка товара переходит в режим редактирования с кнопками «сохранить» и «отмена»:
при любых изменениях полей валидируется правильное заполнение полей (по любым правилам); сообщения об ошибках отображаются возле неправильно заполненных полей;
при невалидном заполнении полей кнопка «сохранить» недоступна;
если кликнуть на другую строку — должен включиться режим просмотра карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе клик игнорируется);
если кликнуть на кнопку «редактировать» другого товара — сразу включается редактирование карточки этого товара (если в редактируемую сейчас карточку не были внесены изменения, иначе нажатие кнопки игнорируется либо кнопка запрещается);
все кнопки «удалить» и кнопка «новый» должны быть запрещены.
По нажатию кнопки «новый» карточка товара переходит в режим добавления (пустая форма) с кнопками «добавить» и «отмена»,:
валидация работает аналогично;
клики по строкам товаров не должны ничего делать;
выделенной цветом строки товара не должно быть;
все кнопки «удалить», «редактировать» и «новый» должны быть запрещены.

Прислать на проверку на адрес loktev.alex.74@gmail.com ссылку на git-репозиторий и имя папки с выполненным домашним заданием.
*/

import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './ProductsTable.css';

import Product from './Product';

class ProductsTable extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        products:PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                photo: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        ),
    };

    static defaultProps = {
        title: "Какой-то интернет-магазин",
        products: [],
    };

    state = {
        selectedProduct: -1,
        productsToShow:this.props.products.slice(),
    }

    deleteProduct = (code) => {
        console.log('выбран ответ с кодом '+code);

        //this.setState( {selectedAnswerCode:code} );
        /*var isConfirmed = confirm('Удалить ' + this.state.productsToShow[code-1].title + ' из списка товаров?');
        if (isConfirmed) {
         console.log('delete ' + code);
         var arr = this.state.productsToShow.splice(code, 1);
         console.log(arr);
         //this.setState( {productsToShow:this.state.productsToShow.splice(code, 1)} );
        }*/
    };

    selectProduct = (code) => {
        this.setState( {selectedProduct:code} );
    };

    render() {

        var productsCode=[];

        var productsTableTitleCode=   
            DOM.div({className:'ProductsTitle'},
            DOM.span({className:'TitleName'},'Product'),  
            DOM.span({className:'TitlePrice'},'Price'),
            DOM.span({className:'TitleCount'},'Count'),
        );

        var productsCode=this.state.productsToShow.map( v =>
            React.createElement(Product, {
                key:v.code, photo:v.photo, title:v.title, 
                code:v.code, price:v.price, count:v.count,
                cbDelete:this.deleteProduct, 
            isSelected:v.code===this.state.selectedProduct? true:false, cbSelect:this.selectProduct,})
        );

        return DOM.div( {className:'ProductsTable'}, 
            DOM.div( {className:'ShopTitle'}, this.props.title),
            DOM.div( {className:'Products'}, productsTableTitleCode, productsCode),
        );
    }
}

export default ProductsTable;