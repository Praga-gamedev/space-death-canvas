import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Button } from '@components/Button';

describe('Button component', () => {
    test('button rendered correctly', () => {
        const children = 'Snapshot!';
        const ButtonComponent = renderer
            .create(<Button>{children}</Button>)
            .toJSON();
        expect(ButtonComponent).toMatchSnapshot();
    });

    test('text rendered correctly', () => {
        const buttonText = 'Click me';
        const ButtonComponent = mount(<Button>{buttonText}</Button>);

        expect(ButtonComponent.text()).toBe(buttonText);
    });

    test('content rendered correctly', () => {
        const buttonText = 'Click me';
        const ButtonComponent = mount(
            <Button>
                <span>{buttonText}</span>
            </Button>
        );

        expect(ButtonComponent.find('span')).toHaveLength(1);
        expect(ButtonComponent.find('span').at(0).text()).toBe(buttonText);
    });

    test('click event working', () => {
        const onClick = jest.fn();
        const props = { onClick };

        const ButtonComponent = mount(<Button {...props} />);
        ButtonComponent.simulate('click');

        expect(onClick).toBeCalledTimes(1);
    });
});
