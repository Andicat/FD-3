import React from 'react';
import PropTypes from 'prop-types';

class File extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <span className='tree__node tree__file'>{this.props.name}</span>
        );
    }
}

export default File;
