import {factory, findComponent} from '../../__test__/utils/helpers';
import App from './index';

describe('App', () => {
    it('renders without error', () => {
        const wrapper = factory(App);
        const component = findComponent(wrapper, 'component-app');

        expect(component.exists()).toBe(true);
    });
});
