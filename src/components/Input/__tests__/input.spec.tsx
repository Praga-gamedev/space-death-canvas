import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '../index';
import { mount } from 'enzyme';

describe('Input component', () => {
    test('input rendered correctly', () => {
        const InputComponent = renderer.create(<Input />).toJSON();
        expect(InputComponent).toMatchSnapshot();
    });

    test('label not exist when label prop undefined', () => {
        const InputComponent = mount(<Input />);
        const InputLabel = InputComponent.find({
            'data-test-id': 'input-label',
        }).hostNodes();
        expect(InputLabel).toHaveLength(0);
    });

    test('label exist when label prop defined', () => {
        const labelText = 'text';
        const InputComponent = mount(<Input label={labelText} />);
        const InputLabel = InputComponent.find({
            'data-test-id': 'input-label',
        }).hostNodes();

        expect(InputLabel).toHaveLength(1);
        expect(InputLabel.at(0).text()).toBe(labelText);
    });

    test('change event working', () => {
        const onChange = jest.fn();
        const props = { onChange };
        const InputComponent = mount(<Input {...props} />);

        InputComponent.find('input').simulate('change');

        expect(onChange).toBeCalledTimes(1);
    });
});
