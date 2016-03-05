var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./rc-components/nav');
var Button = require('./rc-components/button');

module.exports = React.createClass({
    handleClick(e) {
        e.preventDefault();

        console.log('点击提交按钮');
    },

    render() {
        ReactDOM.render(
            <div>
                <Nav title='标题' />
                <Button text='提交' handleClick={this.handleClick} />
            </div>
        , document.getElementById('app'));
    }
});
