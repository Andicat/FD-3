import React from 'react';
import PropTypes from 'prop-types';
import foldersEvents from './events';

import Folder from './Folder';

//Компонент - блок-дерево с папками.
class Folders extends React.Component {

    static propTypes = {
        folders: PropTypes.object.isRequired, //входная папка (корень дерева)
    };

    state = {
        activeFolder: '', //код активной папки
    };

    componentDidMount = () => {
        foldersEvents.addListener('showFiles',this.activateFolder);
        console.log('Folders - componentDidMount');
    }

    componentWillUnmount = () => {
        foldersEvents.removeListener('showFiles',this.activateFolder);
        console.log('Folders - componentWillUnmount');
    }

    activateFolder = (info) => {
        this.setState({activeFolder:info.activeCode});
    }

    componentWillReceiveProps = (newProps)           => { console.log('Folders - componentWillReceiveProps'); };
    componentWillUpdate       = ()                   => { console.log('Folders - componentWillUpdate');       };
    componentDidUpdate        = (oldProps, oldState) => { console.log('Folders - componentDidUpdate');        };
    componentWillMount        = ()                   => { console.log('Folders - componentWillMount');        };
    
    render() {
        return (
            <div className='tree__folders'>
                <Folder key='1' code='1' name={this.props.folders.name} children={this.props.folders.children} activeFolder={this.state.activeFolder}></Folder>
            </div>
        );
    }
}

export default Folders;
