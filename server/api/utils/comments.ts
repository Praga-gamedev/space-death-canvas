import { IComment } from '../interfaces';

type TGroupedCommets = Record<string, IComment[]>;

type TCommentWithChildren = IComment & { children: IComment[] };

export const flatCommentsToTree = (flatCommentsList: IComment[]) => {
    const groupedByParent = flatCommentsList.reduce(
        (acc: TGroupedCommets, comment) => {
            const key = comment.parent_comment_id || 'roots';
            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key].push(comment);

            return acc;
        },
        {}
    );

    const withChildren = (comment: IComment): TCommentWithChildren => {
        const children = groupedByParent[comment.comment_id] || [];

        return { ...comment, children: children.map(withChildren) };
    };

    return groupedByParent.roots?.map(withChildren) || [];
};
