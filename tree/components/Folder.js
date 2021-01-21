import React from 'react';
import PropTypes from 'prop-types';

import foldersEvents from './events';

//Компонент - папка (с вложенными в нее папками).
class Folder extends React.Component {

    static propTypes = {
        showFiles: PropTypes.bool.isRequired, //показываем файлы вместе с папками
        renderFuncFolder: PropTypes.func.isRequired, //функция рендера папки
        renderFuncFile: PropTypes.func.isRequired, //функция рендера файла
        activeFolder: PropTypes.string.isRequired, //код активной папки
        code: PropTypes.string.isRequired,  //уникальный код
        name: PropTypes.string.isRequired,  //наименование
        children: PropTypes.array,  //вложенные дети (папки и файлы)
    };

    state = {
        isOpen: false, //признак, открыта ли папка
        childrenFolders: this.props.children.slice().filter( v => v.type=='FOLDER'), //вложенные дети-папки
        childrenFiles: this.props.children.slice().filter( v => v.type=='FILE'), //вложенные дети-файлы
    };

    componentWillReceiveProps = (newProps)           => { console.log(`Folder ${this.props.name} - componentWillReceiveProps`); };
    componentWillUpdate       = ()                   => { console.log(`Folder ${this.props.name} - componentWillUpdate`);       };
    componentDidUpdate        = (oldProps, oldState) => { console.log(`Folder ${this.props.name} - componentDidUpdate`);        };
    componentWillMount        = ()                   => { console.log(`Folder ${this.props.name} - componentWillMount`);        };
    componentDidMount         = ()                   => { console.log(`Folder ${this.props.name} - componentDidMount`);         };
    componentWillUnmount      = ()                   => { console.log(`Folder ${this.props.name} - componentWillUnmount`);      };


    //клик по папке - открывает/закрывает ее и активирует, показывая ее файлы.
    clickFolder = () => {
        console.log(this.state.childrenFolders);
        console.log(this.state.childrenFiles);
        this.setState({isOpen:!this.state.isOpen});
        if (this.props.code!=this.props.activeFolder) {
            foldersEvents.emit('showFiles',{files:this.state.childrenFiles, activeCode:this.props.code});
        }
    }

    render() {
        return (
            <div className={'tree__folder' + (this.state.isOpen?' tree__folder--open ':'')  + (this.props.code==this.props.activeFolder?' tree__folder--active ':'')}>
                {this.props.renderFuncFolder(this.props.name,this.clickFolder)}
                {this.state.isOpen && this.state.childrenFolders.length+this.state.childrenFiles.length>0 && (
                    <div className='tree__folder-children'>
                        {this.state.childrenFolders.map( (v,i) => <Folder key={this.props.code + '-' + (i+1)} code={this.props.code + '-' + (i+1)} name={v.name} children={v.children} activeFolder={this.props.activeFolder} renderFuncFolder={this.props.renderFuncFolder} renderFuncFile={this.props.renderFuncFile} showFiles={this.props.showFiles}></Folder>)}
                        {this.props.showFiles && this.state.childrenFiles.map((v,i) => this.props.renderFuncFile(i,v.name,false))}
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Folder;
