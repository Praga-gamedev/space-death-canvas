import LocalApi from 'src/utils/api/LocalApi';

export const getTopicList = () => {
    return LocalApi.get({
        url: '/topic',
    });
};

export const getTopicById = (id: number) => {
    return LocalApi.get({
        url: `/topic/${id}`,
    });
};

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

export const getCommentList = (topicId: number) => {
    return LocalApi.get({
        url: `/comment/${topicId}`,
    });
};

export const createComment = (
    message: string,
    topicId: number,
    commentId: number | null = null
) => {
    return LocalApi.post({
        url: `/comment/${topicId}`,
        data: { message, parent_id: commentId },
    });
};

export const createComment_new = (
    message: string,
    topicId: number,
    commentId: number
) => {
    return LocalApi.post({
        url: `/comment/`,
        data: { message, parent_id: commentId, topic_id: topicId },
    });
};

export const deleteComment = (topicId: number, commentId: number) => {
    return LocalApi.delete({
        url: `/comment/${topicId}`,
        data: { id: commentId },
    });
};
