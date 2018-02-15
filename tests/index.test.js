import React from 'react';
import {mount} from 'enzyme';
import {Watch} from '../src/';

describe('Component: Watch', () => {
  const minProps = {
    value: 'Some value',
    test: jest.fn(),
    action: jest.fn(),
  };

  beforeEach(() => {
    minProps.test.mockReset();
    minProps.action.mockReset();
  });

  it('renders nothing', () => {
    const wrapper = mount(
      <div>
        Hello there!
        <Watch {...minProps} />
      </div>
    );

    expect(wrapper.text()).toEqual('Hello there!');
  });

  it('invokes test(prevValue, value) and NOT action when test fails', () => {
    const {test, action} = minProps;
    test.mockReturnValue(false);

    const wrapper = mount(<Watch {...minProps} value="a" />);

    expect(test).not.toHaveBeenCalled();

    wrapper.setProps({value: 'b'});
    expect(test).toHaveBeenCalled();
    expect(test.mock.calls[0]).toEqual(['a', 'b']);

    expect(action).not.toHaveBeenCalled();
  });

  it('invokes action(prevValue, value) when test passes', () => {
    const {test, action} = minProps;
    test.mockReturnValue(true);

    const wrapper = mount(<Watch {...minProps} value="a" />);
    wrapper.setProps({value: 'b'});

    expect(action).toHaveBeenCalled();
    expect(action.mock.calls[0]).toEqual(['a', 'b']);
  });
});
