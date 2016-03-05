import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './rc-components/nav';
import Button from './rc-components/button';

exports default React.createClass({
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
