import React from 'react';
import PropTypes from 'prop-types';

class Client extends React.PureComponent {

    static propTypes = {
        client: PropTypes.object.isRequired,
        //isEdit: PropTypes.bool,
        //isNew: PropTypes.bool,
        //isChange: PropTypes.bool,
    };

    componentDidUpdate = () => {
        console.log(`Client ${this.props.client.lastName} did update`);
    }

    componentWillReceiveProps = (newProps) => {
        //console.log(`Client ${this.props.client.lastName} componentWillReceiveProps`);
        //this.setState({info:newProps.info});
      };

    /*selectclient = (evt) => {
        if (!this.props.isChange&&(evt.target.type!='button')) {
            this.props.cbEdit(this.props.code, false);
        }
    };

    deleteclient = () => {
        this.props.cbDelete(this.props.code,this.props.title);
    };

    editclient = () => {
        this.props.cbEdit(this.props.code, true);
    };*/

    render() {
        console.log(`Client ${this.props.client.lastName} render`);
        //console.log(this.props.client.activity);
        return (
            <div className={'client client--' + this.props.client.activity} onClick={this.selectClient}>
                <span className='client__lastName'>{this.props.client.lastName}</span>
                <span className='client__name'>{this.props.client.name}</span>
                <span className='client__midName'>{this.props.client.midName}</span>
                <span className='client__balance'>{this.props.client.balance}</span>
                <span className='client__activity'>{this.props.client.activity}</span>
                <button className='client__button' type='button' onClick={this.editClient} disabled={this.props.isChange||this.props.isNew}>Редактировать</button>
                <button className='client__button' type='button' onClick={this.deleteClient} disabled={this.props.isEdit}>Удалить</button>
            </div>
        );
    }
}

export default Client;