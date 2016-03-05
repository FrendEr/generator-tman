var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
    propTypes: {
        text: PropTypes.string.isRequired,
        handleClick: PropTypes.func
    },

    componentWillMount() {
    },

    componentDidMount() {
    },

    buttonOperate() {
        console.log('button operate');
    },

    render() {
        return (
            <button onClick={this.props.handleClick}>{this.props.text}</button>
        );
    }
});
