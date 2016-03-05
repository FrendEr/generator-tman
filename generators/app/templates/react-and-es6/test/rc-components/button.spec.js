import React from 'react';
import { mount } from 'enzyme';
import Button from '../../src/rc-components/button';

describe('React', () => {
    describe('<Button />', () => {
        it('calls componentDidMount', () => {
            sinon.spy(Button.prototype, 'componentDidMount');
            let wrapper = mount(<Button text='buttonText' />);
            expect(Button.prototype.componentDidMount.calledOnce).to.equal(true);
        });

        it('allows us to set props', () => {
            let wrapper = mount(<Button text='buttonText' />);
            expect(wrapper.props().text).to.equal('buttonText');
        });

        it('has `button` child node', () => {
            let wrapper = mount(<Button text='buttonText' />);
            expect(wrapper.find('button')).to.have.length(1);
        });

        it('simulates click event', () => {
            let handleClick = sinon.spy();
            let wrapper = mount(<Button text='buttonText' handleClick={handleClick} />);
            wrapper.find('button').simulate('click');
            expect(handleClick.calledOnce).to.equal(true);
        });
    });
});
