import {ReactWrapper, ShallowWrapper} from 'enzyme';

type IWrapper = ShallowWrapper | ReactWrapper;

const findComponent = (wrapper: IWrapper, attribute: string): IWrapper => wrapper.find(`[data-test="${attribute}"]`);

export default findComponent;
