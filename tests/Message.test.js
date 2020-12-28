import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import Message from '../src/components/Message';

describe('<Message />', () => {
  it('uses information given as props', () => {
    const testContent = 'You\'re quite talented!';
    const wrapper = shallow(<Message content={testContent} />);
    // find all p elements in the rendering
    const elementsP = wrapper.find('p');
    // should be one in it
    expect(elementsP).to.have.lengthOf(1);
    // the first element should be 'You're quite talented!' as the prop that was used
    expect(elementsP.text()).to.equal(testContent);
  });
});
