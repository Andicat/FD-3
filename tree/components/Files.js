import React from 'react';
import foldersEvents from './events';

class Files extends React.Component {

    state = {
        files: [],
    }

    componentDidMount = () => {
        foldersEvents.addListener('showFiles',this.renderFiles)
    }

    componentWillUnmount = () => {
        foldersEvents.removeListener('showFiles',this.renderFiles)
    }

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
