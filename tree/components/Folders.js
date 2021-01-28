import React from 'react';
import PropTypes from 'prop-types';
import foldersEvents from './events';

import Folder from './Folder';

//Компонент - блок-дерево с папками.
class Folders extends React.Component {

    static propTypes = {
        showFilesAside: PropTypes.bool.isRequired, //показать файлы отдельным блоком
        renderFuncFolder: PropTypes.func.isRequired, //функция рендера папки
        renderFuncFile: PropTypes.func.isRequired, //функция рендера файла
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
            <div className={'tree__folders' + (this.props.showFilesAside?'':' tree__folders--only')}>
                <Folder key='1' code='1' name={this.props.folders.name} children={this.props.folders.children} activeFolder={this.state.activeFolder} showFiles={!this.props.showFilesAside} renderFuncFolder={this.props.renderFuncFolder} renderFuncFile={this.props.renderFuncFile}></Folder>
            </div>
        );
    }
}

export default Folders;
