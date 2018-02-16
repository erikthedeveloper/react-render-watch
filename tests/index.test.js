import React from 'react';
import {mount} from 'enzyme';
import {Watch} from '../src/';

describe('Component: Watch', () => {
  const minProps = {
    value: 'Some value',
    test: jest.fn((prev, current) => prev !== current),
    action: jest.fn(),
  };

  beforeEach(() => {
    minProps.test.mockClear();
    minProps.action.mockClear();
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

  it('invokes test(prev, current) and NOT action when test fails', () => {
    const {test, action} = minProps;

    const wrapper = mount(<Watch {...minProps} value="a" />);

    expect(test).not.toHaveBeenCalled();

    wrapper.setProps({value: 'a'});
    expect(test).toHaveBeenCalled();
    expect(test.mock.calls[0]).toEqual(['a', 'a']);

    expect(action).not.toHaveBeenCalled();
  });

  it('invokes action(prev, current) when test passes', () => {
    const {test, action} = minProps;

    const wrapper = mount(<Watch {...minProps} value="a" />);
    wrapper.setProps({value: 'b'});

    expect(action).toHaveBeenCalled();
    expect(action.mock.calls[0]).toEqual(['a', 'b']);

    wrapper.setProps({value: 'b'});

    expect(test.mock.calls.length).toEqual(2);
    expect(action.mock.calls.length).toEqual(1);
  });
});
