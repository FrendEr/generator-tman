var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
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
