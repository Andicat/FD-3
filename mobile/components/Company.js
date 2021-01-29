import React from 'react';
import PropTypes from 'prop-types';
import CompanyEvents from './events';

import Client from './Client';
import ClientCard from './ClientCard';

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
        clientToEdit: null,
        clientsToShow:this.props.clients.slice(),
    }

    setCompanyName = (name) => {
        this.setState({name:name});
    }

    setFilter = (activity) => {
        this.setState({showActive:activity});
    }

    componentDidMount = () => {
        CompanyEvents.addListener('deleteClient',this.deleteClient);
        CompanyEvents.addListener('editClient',this.editClient);
        CompanyEvents.addListener('updateClient',this.updateClient);
    }

    componentWillUnmount = () => {
        CompanyEvents.removeListener('deleteClient',this.deleteClient);
        CompanyEvents.removeListener('editClient',this.editClient);
        CompanyEvents.removeListener('updateClient',this.updateClient);
    }

    deleteClient = (clientId) => {
        this.setState({clientsToShow:this.state.clientsToShow.filter(c => c.id!=clientId)});
    };

    editClient = (client) => {
        this.setState({clientToEdit:null}, () => {this.setState({clientToEdit:client})});
    };

    updateClient = (clientNew) => {
        let clientsToShowNew;
        if (clientNew.id) {
            clientsToShowNew = this.state.clientsToShow.map(c => c.id!=clientNew.id?c:clientNew);
        } else {
            let newId = this.state.clientsToShow.reduce(function (r, v) { return ( r < v.id ? v.id : r);},0) + 1;
            clientsToShowNew = [...this.state.clientsToShow,{id:newId,...clientNew}];
        }
        this.setState({clientsToShow:clientsToShowNew,clientToEdit:null});
    };

    newClient = () => {
        this.setState( {clientToEdit:{lastName: "", name: "", midName: "", balance: 0, activity: "active",}} );
    }

    render() {
        console.log(`Company ${this.state.name} render`);
    
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

        var clientsCode=this.state.clientsToShow.map( c => (this.state.showActive&&this.state.showActive!=c.activity)?null:<Client key={c.id} client={c}/>);

        if (this.state.clientToEdit) {
            var cardCode = <ClientCard client={this.state.clientToEdit}/>;
        };

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
                <input className='company__add'type="button" value="Добавить клиента" onClick={this.newClient} />
                {cardCode}
            </div>
        )
    }
}

export default Company;