import React from 'react';
import PropTypes from 'prop-types';

class Files extends React.Component {

    static propTypes = {
        files: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className='tree__files'>
                <span className='tree__node tree__file'>{this.props.name}</span>
            </div>
            
        );
    }
}

export default Files;
