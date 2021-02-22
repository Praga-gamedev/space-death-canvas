import React from 'react';

import { mount } from 'enzyme';
import ErrorBoundary from '../index';

const text = 'privet';
const ChildComponent = () => {
    return <span>{text}</span>;
};

describe('ErrorBoundary', () => {
    it('render child component if it not throw error', () => {
        const ErrorBoundaryComponent = mount(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>
        );

        expect(ErrorBoundaryComponent.find('h1')).toHaveLength(0);
        expect(ErrorBoundaryComponent.find('span')).toHaveLength(1);
        expect(ErrorBoundaryComponent.find('span').at(0).text()).toBe(text);
    });

    it('should display an ErrorMessage if wrapped component throws', () => {
        // скрыл console.error из компонента, т.к. мусорит в консоль при прохождении тестов
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const ErrorBoundaryComponent = mount(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>
        );

        const error = new Error('test');

        ErrorBoundaryComponent.find(ChildComponent).simulateError(error);

        expect(ErrorBoundaryComponent.find('h1')).toHaveLength(1);
        expect(ErrorBoundaryComponent.find('h1').at(0).text()).toBe(
            'Что-то пошло не так.'
        );
    });
});
