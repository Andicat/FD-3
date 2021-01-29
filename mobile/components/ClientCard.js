import React from 'react';
import PropTypes from 'prop-types';
import CompanyEvents from './events';

class ClientCard extends React.PureComponent {

    static propTypes = {
        client: PropTypes.object.isRequired,
    };

    save = () => {
        let newClientData = {...this.props.client, lastName: this.lastName.value, name: this.name.value, midName: this.midName.value, balance: Number(this.balance.value)};
        CompanyEvents.emit('updateClient',newClientData);
    }

    cancel = () => {
        this.setState({isValid:true},this.props.cbCancel(this.props.code,false)); 
    }

    render() {
        console.log(`Client card render`);
        return (
            <div className='clientCard'>
                <div className='clientCard__field'>
                    <label htmlFor='lastName'>Фамилия:</label>
                    <input type='text' name='lastName' id='lastName' defaultValue={this.props.client.lastName} ref={(f) => this.lastName = f}/>
                </div>
                <div className='clientCard__field'>
                    <label htmlFor='name'>Имя:</label>
                    <input type='text' name='name' id='name' defaultValue={this.props.client.name} ref={(f) => this.name = f}/>
                </div>
                <div className='clientCard__field'>
                    <label htmlFor='midName'>Отчество:</label>
                    <input type='text' name='midName' id='midName' defaultValue={this.props.client.midName} ref={(f) => this.midName = f}/>
                </div>
                <div className='clientCard__field'>
                    <label htmlFor='balance'>Баланс:</label>
                    <input type='text' name='balance' id='balance' defaultValue={this.props.client.balance} ref={(f) => this.balance = f}/>
                </div>
                <div className='clientCard__field'>
                    <button type='button' onClick={this.save}>Сохранить </button>
                    <button type='button' onClick={this.cancel}>Отмена</button>
                </div>
            </div>
        );
    }
}

export default ClientCard;