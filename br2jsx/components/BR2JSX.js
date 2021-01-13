/*
Разработать компонент, который:
получает ОДИН props, содержащий многострочный текст, разбитый на тегами <br>, <br/> или <br />;
отображает этот многострочный текст внутри себя, разбитый тегами <br>.
Не использовать стилевое свойство white-space и теги, стилизованные этим стилевым свойством.
Не использовать React-атрибут dangerouslySetInnerHTML.

Разработать проект br2jsx, демонстрирующий работу компонента.
*/

import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        var regBr = /<br.*?>/ig;
        var textCode = [];
        this.props.text.split(regBr).forEach( e => {textCode.push(e); textCode.push(<br/>)});
        textCode.pop();
        
        return (
            <div className='BR2JSX'>
                {textCode}      
            </div>
        )
    }
}

export default BR2JSX;