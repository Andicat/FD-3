"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Company from '../components/Company';
import CompanyEvents from '../components/events';

test('работа Company - добавление клиента', () => {

    let clientsArr = [ 
        {"id":1,"lastName":"Иванов","name":"Иван","midName":"Иванович","balance":200,"activity":"active"},
        {"id":2,"lastName":"Сидоров","name":"Сидор","midName":"Сидорович","balance":250,"activity":"active"},
        {"id":3,"lastName":"Петров","name":"Петр","midName":"Петрович","balance":180,"activity":"active"},
        {"id":4,"lastName":"Григорьев","name":"Григорий","midName":"Григорьевич","balance":-200,"activity":"blocked"}
    ]
;

    //создаём тестовую версию компонента
    const component = renderer.create(
    <Company clients={clientsArr}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //вызываем событие добавления нового клиента
    let newClientData = {"lastName":"Новый","name":"Клиент","midName":"Иванович","balance":100,"activity":"active"};
    CompanyEvents.emit('updateClient',newClientData);
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //вызываем событие редактирования клиента
    let upClientData = {"id":3,"lastName":"Новый","name":"Клиент","midName":"Иванович","balance":100,"activity":"active"};
    CompanyEvents.emit('updateClient',upClientData);
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //вызываем событие удаление клиента
    let idDelClient = 1;
    CompanyEvents.emit('deleteClient',idDelClient);
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //вызываем событие открытия карточки клиента
    let clientToEdit = clientsArr[1];
    CompanyEvents.emit('editClient',clientToEdit);
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

});
