"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Company from '../components/Company';

test('работа Company - фильтр', () => {

    let clientsArr = [ 
        {"id":1,"lastName":"Иванов","name":"Иван","midName":"Иванович","balance":200,"activity":"active"},
        {"id":2,"lastName":"Сидоров","name":"Сидор","midName":"Сидорович","balance":250,"activity":"active"},
        {"id":3,"lastName":"Петров","name":"Петр","midName":"Петрович","balance":180,"activity":"active"},
        {"id":4,"lastName":"Григорьев","name":"Григорий","midName":"Григорьевич","balance":-200,"activity":"blocked"}
    ]
;

    // создаём тестовую версию компонента
    const component = renderer.create(
    <Company clients={clientsArr}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //найдем кнопки фильтрации
    const filterButtons = component.root.find(el => el.props.className=='company__filter').children;
    filterButtons.forEach( b => {
        b.props.onClick();
        // получаем уже изменённый снэпшот
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });
});
