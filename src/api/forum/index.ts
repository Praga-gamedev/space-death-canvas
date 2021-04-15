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

export const getCommentList = (
    topicId: number,
    commentId: number | null = null
) => {
    return LocalApi.get({
        url: `/comment/${topicId}`,
        params: { id: commentId },
    });
};

export const createComment = (
    message: string,
    topicId: number,
    commentId: number | null = null
) => {
    return LocalApi.post({
        url: `/comment/`,
        data: { message, topic_id: topicId, parent_id: commentId },
    });
};

export const deleteComment = (topicId: number, commentId: number) => {
    return LocalApi.delete({
        url: `/comment/`,
        data: { topic_id: topicId, id: commentId },
    });
};

export const getCommentById = (topicId: number, commentId: number) => {
    return LocalApi.get({
        url: `/comment/${topicId}/${commentId}`,
    });
};
