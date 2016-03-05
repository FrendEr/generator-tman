var React = require('react');
var mount = require('enzyme').mount;
var Nav = require('../../src/rc-components/nav');

describe('React', () => {
    describe('<Nav />', () => {
        it('allows us to set props', () => {
            var wrapper = mount(<Nav title='navTitle' />);
            expect(wrapper.props().title).to.equal('navTitle');
        });

        it('has `h1` child node', () => {
            var wrapper = mount(<Nav title='navTitle' />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
    });
});
