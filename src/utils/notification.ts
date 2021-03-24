import { store } from 'react-notifications-component';

export const Notification = ({
    type = 'danger',
    title = 'Ошибка!',
    message,
}: {
    type?: 'success' | 'danger' | 'info' | 'default' | 'warning';
    title?: string;
    message: string;
}) => {
    store.addNotification({
        type,
        title,
        message,
        insert: 'bottom',
        container: 'bottom-right',
        dismiss: {
            duration: 8000,
            onScreen: true,
            pauseOnHover: true,
        },
    });
};
