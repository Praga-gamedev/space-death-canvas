import React, { PureComponent, ErrorInfo } from 'react';

import { IProps, IState } from './types';

class ErrorBoundary extends PureComponent<IProps, IState> {
    public state: IState = {
        hasError: false,
    };

    static getDerivedStateFromError(_: Error): IState {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // TODO: Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // TODO: Можно отрендерить запасной UI произвольного вида
            return <h1>Что-то пошло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
