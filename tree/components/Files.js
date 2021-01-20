import React from 'react';
import foldersEvents from './events';

class Files extends React.Component {

    state = {
        files: [],
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
        this.setState({files: info.files.map((v,i) => <span key={i} className='tree__file'>{v.name}</span>)});
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
