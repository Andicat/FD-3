import React from 'react';
import PropTypes from 'prop-types';

import Folder from './Folder';
import {foldersEvents} from './events';

class Tree extends React.Component {

    static propTypes = {
        treeData: PropTypes.object.isRequired,
    };

    componentDidMount = () => {
        foldersEvents.addListener('showFiles',this.renderFiles)
    }

    componentWillUnmount = () => {
        foldersEvents.removeListener('showFiles',this.renderFiles)
    }

    renderFiles(code) {
        console.log(code);
        ttt=code;
    }

    ttt = '';

    render() {

        let foldersCode = <Folder name={this.props.treeData.name} children={this.props.treeData.children}></Folder>;

        //let filesCode = <File name={this.props.treeData.name} children={this.props.treeData.children}></Folder>;

        return (
        <div className='tree__container'>
            <div className='tree__folders'>
                {foldersCode}
            </div>
            
        </div>)
    }
}

export default Tree;
