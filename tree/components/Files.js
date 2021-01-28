import React from 'react';
import PropTypes from 'prop-types';
import foldersEvents from './events';

//Компонент - блок-список с файлами текущей активной папки.
class Files extends React.Component {

    static propTypes = {
        renderFunc: PropTypes.func.isRequired,
    };

    state = {
        files: [],   //массив фалов к показу
    }

    componentDidMount = () => {
        foldersEvents.addListener('showFiles',this.renderFiles);
        console.log('Files - componentDidMount');
    }

    componentWillUnmount = () => {
        foldersEvents.removeListener('showFiles',this.renderFiles);
        console.log('Files - componentWillUnmount');
    }

    componentWillReceiveProps = (newProps)           => { console.log('Files - componentWillReceiveProps'); };
    componentWillUpdate       = ()                   => { console.log('Files - componentWillUpdate');       };
    componentDidUpdate        = (oldProps, oldState) => { console.log('Files - componentDidUpdate');        };
    componentWillMount        = ()                   => { console.log('Files - componentWillMount');        };
    

    renderFiles = (info) => {
        this.setState({files: info.files.map((v,i) => this.props.renderFunc(i,v.name,true))});
    }

    render() {
        return (
            <div className='tree__files'>
                {this.state.files.length>0?this.state.files:null}
            </div>
        );
    }
}

export default Files;
