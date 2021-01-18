import React from 'react';
import PropTypes from 'prop-types';

class Tree extends React.Component {

    static propTypes = {
        treeData: PropTypes.object.isRequired,
    };

    state = {
        treeData = this.propTypes.treeData,
    }

    render() {
        console.log(this.state.treeData);
        return (
        <div>
            <div className='folders'>
                {treeData.type}
            </div>
            <div className='files'></div>
        </div>)
    }
}

export default Tree;
