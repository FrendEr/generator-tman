import React from 'react';
import { mount } from 'enzyme';
import Nav from '../../src/rc-components/nav';

describe('React', () => {
    describe('<Nav />', () => {
        it('allows us to set props', () => {
            let wrapper = mount(<Nav title='navTitle' />);
            expect(wrapper.props().title).to.equal('navTitle');
        });

        it('has `h1` child node', () => {
            let wrapper = mount(<Nav title='navTitle' />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
    });
});
