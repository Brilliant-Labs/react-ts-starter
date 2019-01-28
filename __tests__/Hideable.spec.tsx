import * as React from 'react';
import { shallow } from 'enzyme';
import Hideable from '../components/Hideable';

test('Hideable should hide', () => {
  // Render a checkbox with label in the document
  const HiddenUI = shallow(<Hideable hidden><div>this is not to be shown to the user</div></Hideable>);
  expect(HiddenUI.prop('style')).toHaveProperty('display','none')

  const UnhiddenUI = shallow(<Hideable><div>this is to be shown to the user</div></Hideable>)
  expect(UnhiddenUI.prop('style')).toBeUndefined()
});