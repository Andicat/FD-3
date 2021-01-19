import React from 'react';
import PropTypes from 'prop-types';
import foldersEvents from './events';

import Folder from './Folder';

class Folders extends React.Component {

    static propTypes = {
        folders: PropTypes.object.isRequired,
    };

    state = {
        activeFolder: '',
    };

    componentDidMount = () => {
        foldersEvents.addListener('showFiles',this.activateFolder)
    }

    componentWillUnmount = () => {
        foldersEvents.removeListener('showFiles',this.activateFolder)
    }

    activateFolder = (info) => {
        this.setState({activeFolder:info.activeCode});
    }

    render() {
        return (
            <div className='tree__folders'>
                <Folder key='1' code='1' name={this.props.folders.name} children={this.props.folders.children} activeFolder={this.state.activeFolder}></Folder>
            </div>
        );
    }
}

export default Folders;
