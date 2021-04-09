import LocalApi from 'src/utils/api/LocalApi';

export const createTopic = (name: string) => {
    return LocalApi.post({
        url: '/topic',
        data: { name },
    });
};

export const deleteTopic = (id: number) => {
    return LocalApi.delete({
        url: '/topic',
        data: { id },
    });
};

export const getTopicList = () => {
    return LocalApi.get({
        url: '/topic',
    });
};
