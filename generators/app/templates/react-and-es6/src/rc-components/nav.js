import React, { PropTypes } from 'react';

export default React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired
    },

    render() {
        return (
            <div>
                <h1>{this.title}></h1>
            </div>
        );
    }
});
