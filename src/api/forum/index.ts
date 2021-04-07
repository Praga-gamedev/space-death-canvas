import LocalApi from 'src/utils/api/LocalApi';

export const createTopic = (data: string) => {
    return LocalApi.post({
        url: '/topic',
        data,
    });
};

export const getTopicList = () => {
    return LocalApi.get({
        url: '/topic',
    });
};
