import React from 'react';
import PropTypes from 'prop-types';

import File from './File';
import {foldersEvents} from './events';

class Folder extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.array,
    };

    state = {
        isOpen: false,
        childrenFolders: this.props.children.slice().filter( v => v.type=='FOLDER'),
        childrenFiles: this.props.children.slice().filter( v => v.type=='FILE'),
    };

    openFolder = () => {
        this.setState({isOpen:!this.state.isOpen});  
    }

    showFiles = (code) => {
        foldersEvents.emit('showFiles',code);
    }

    render() {
        return (
            <div className={'tree__node tree__folder' + (this.state.isOpen?' tree__folder--open ':'')}>
                <div className='tree__node-name'>
                    <input type='checkbox' name='tree' id={this.props.name} onClick={this.openFolder}/>
                    <label htmlFor={this.props.name}></label>
                    <span>{this.props.name}</span>
                </div>
                {this.state.isOpen && this.state.childrenFolders.length>0 && (
                    <div className='tree__node-children'>
                        {this.state.childrenFolders.map( v => <Folder name={v.name} children={v.children}></Folder>)}
                    </div>
                    )
                }
                {this.state.isOpen && this.state.childrenFiles.length>0 && (
                    
                    this.showFiles(this.state.childrenFiles.map( v => <File name={v.name}></File>)))  
                }
            </div>
        );
    }
}

export default Folder;
