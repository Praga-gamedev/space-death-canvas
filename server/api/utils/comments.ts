import { IComment } from '../interfaces';

type TGroupedCommets = Record<string, IComment[]>;

type TCommentWithChildren = IComment & { children: IComment[] };

export const flatCommentsToTree = (
    flatCommentsList: IComment[],
    commentId?: number
) => {
    const groupedByParent = flatCommentsList.reduce(
        (acc: TGroupedCommets, comment) => {
            const key = comment.parent_id || 'roots';
            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key].push(comment);

            return acc;
        },
        {}
    );

    const withChildren = (comment: IComment): TCommentWithChildren => {
        const children = groupedByParent[comment.id] || [];

        return { ...comment, children: children.map(withChildren) };
    };

    const roots = commentId
        ? groupedByParent[commentId]
        : groupedByParent.roots;

    return roots?.map(withChildren) || [];
};
