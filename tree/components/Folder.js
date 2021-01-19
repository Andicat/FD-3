import React from 'react';
import PropTypes from 'prop-types';

import foldersEvents from './events';

class Folder extends React.Component {

    static propTypes = {
        activeFolder: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
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
        foldersEvents.emit('showFiles',{files:this.state.childrenFiles, activeCode:this.props.code});
    }

    render() {
        return (
            <div className={'tree__folder' + (this.state.isOpen?' tree__folder--open ':'')  + (this.props.code==this.props.activeFolder?' tree__folder--active ':'')}>
                <div className='tree__folder-name' onClick={this.openFolder}>
                    <input type='checkbox' name='tree' id={this.props.name}/>
                    <label htmlFor={this.props.name}></label>
                    <span>{this.props.name}</span>
                </div>
                {this.state.isOpen && this.state.childrenFolders.length>0 && (
                    <div className='tree__folder-children'>
                        {this.state.childrenFolders.map( (v,i) => <Folder key={this.props.code + '-' + (i+1)} code={this.props.code + '-' + (i+1)} name={v.name} children={v.children} activeFolder={this.props.activeFolder}></Folder>)}
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Folder;
