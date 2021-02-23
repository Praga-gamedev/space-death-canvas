import React, { PureComponent, ErrorInfo } from 'react';

import { IProps, IState } from './types';

class ErrorBoundary extends PureComponent<IProps, IState> {
    public state: IState = {
        hasError: false,
    };

    static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div data-test-id="error-boundary-div">
                    <h1>Что-то пошло не так.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
