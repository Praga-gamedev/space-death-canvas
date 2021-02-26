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

        expect(
            ErrorBoundaryComponent.find({
                'data-test-id': 'error-boundary-div',
            }).hostNodes()
        ).toHaveLength(0);

        const ChildSpan = ErrorBoundaryComponent.find('span');
        expect(ChildSpan).toHaveLength(1);
        expect(ChildSpan.at(0).text()).toBe(text);
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
        const ErrorDiv = ErrorBoundaryComponent.find({
            'data-test-id': 'error-boundary-div',
        }).hostNodes();

        expect(ErrorDiv).toHaveLength(1);
    });
});
