var React = require('react');
var mount = require('enzyme').mount;
var Button = require('../../src/rc-components/button');

describe('React', () => {
    describe('<Button />', () => {
        it('calls componentDidMount', () => {
            sinon.spy(Button.prototype, 'componentDidMount');
            var wrapper = mount(<Button text='buttonText' />);
            expect(Button.prototype.componentDidMount.calledOnce).to.equal(true);
        });

        it('allows us to set props', () => {
            var wrapper = mount(<Button text='buttonText' />);
            expect(wrapper.props().text).to.equal('buttonText');
        });

        it('has `button` child node', () => {
            var wrapper = mount(<Button text='buttonText' />);
            expect(wrapper.find('button')).to.have.length(1);
        });

        it('simulates click event', () => {
            var handleClick = sinon.spy();
            var wrapper = mount(<Button text='buttonText' handleClick={handleClick} />);
            wrapper.find('button').simulate('click');
            expect(handleClick.calledOnce).to.equal(true);
        });
    });
});
