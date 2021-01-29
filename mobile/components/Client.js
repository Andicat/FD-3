import React from 'react';
import PropTypes from 'prop-types';
import CompanyEvents from './events';

class Client extends React.PureComponent {

    static propTypes = {
        client: PropTypes.object.isRequired,
    };

    deleteClient = () => {
        CompanyEvents.emit('deleteClient',this.props.client.id);
    };

    editClient = () => {
        CompanyEvents.emit('editClient',this.props.client);
    };

    render() {
        console.log(`Client ${this.props.client.lastName} render`);
        return (
            <div className={'client client--' + this.props.client.activity} onClick={this.selectClient}>
                <span className='client__lastName'>{this.props.client.lastName}</span>
                <span className='client__name'>{this.props.client.name}</span>
                <span className='client__midName'>{this.props.client.midName}</span>
                <span className='client__balance'>{this.props.client.balance}</span>
                <span className='client__activity'>{this.props.client.activity}</span>
                <button className='client__button' type='button' onClick={this.editClient}>Редактировать</button>
                <button className='client__button' type='button' onClick={this.deleteClient}>Удалить</button>
            </div>
        );
    }
}

export default Client;