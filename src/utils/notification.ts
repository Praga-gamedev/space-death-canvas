import { store } from 'react-notifications-component';

export const showErrorNotification = (error: Error) => {
    store.addNotification({
        title: 'Произошла ошибка',
        message: error.message,
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        dismiss: {
            duration: 5000,
        },
    });
};

export const showInfoNotification = (title: string, message: string) => {
    store.addNotification({
        title,
        message,
        type: 'info',
        insert: 'top',
        container: 'top-right',
        dismiss: {
            duration: 5000,
        },
    });
};
