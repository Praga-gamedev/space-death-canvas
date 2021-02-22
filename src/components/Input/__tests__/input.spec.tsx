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
        expect(InputComponent.find('span')).toHaveLength(0);
    });

    test('label exist when label prop defined', () => {
        const labelText = 'text';
        const InputComponent = mount(<Input label={labelText} />);

        expect(InputComponent.find('span')).toHaveLength(1);
        expect(InputComponent.find('span').at(0).text()).toBe(labelText);
    });

    test('change event working', () => {
        const onChange = jest.fn();
        const props = { onChange };
        const InputComponent = mount(<Input {...props} />);

        InputComponent.find('input').simulate('change', {
            target: { value: 'Hello' },
        });

        expect(onChange).toBeCalledTimes(1);
    });
});
