import React from 'react';
import { mount } from 'enzyme';
import { Link } from '../index';

import { history } from '@store/initStore';
import renderer from 'react-test-renderer';

const path = '/test';

// Пытался замокать createBrowserHistory, который изначально создается в сторе, но не получилось
// Мокаю, чтобы по клику на ссылку понять - записалась ли история или нет
jest.mock('@store/initStore', () => ({
    history: {
        push: jest.fn(),
    },
}));

describe('Link component', () => {
    test('link rendered correctly', () => {
        const children = 'Snapshot!';
        const LinkComponent = renderer
            .create(<Link path={path}>{children}</Link>)
            .toJSON();
        expect(LinkComponent).toMatchSnapshot();
    });

    test('link content rendered correctly', () => {
        const linkText = 'Click me';
        const LinkComponent = mount(
            <Link path={path}>
                <span>{linkText}</span>
            </Link>
        );

        expect(LinkComponent.find('span')).toHaveLength(1);
        expect(LinkComponent.find('span').at(0).text()).toBe(linkText);
    });

    test('change browser history onClick', () => {
        const LinkComponent = mount(<Link path={path} />);
        LinkComponent.find('label').simulate('click');

        expect(history.push).toBeCalledTimes(1);
    });
});
