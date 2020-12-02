/* eslint-disable import/no-extraneous-dependencies */
import {shallow} from 'enzyme';

export const factory = (Component, props = {}) => {
    const wrapper = shallow(<Component {...props} />);

    return wrapper;
};

export const findComponent = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);
