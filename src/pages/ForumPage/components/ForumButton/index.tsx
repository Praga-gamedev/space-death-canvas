import React, { FC } from 'react';

import { S } from './units';
import { IForumButtonProps } from './types';

export const ForumButton: FC<IForumButtonProps> = ({ isClicked, ...props }) => {
    return <S.ForumButton {...props} isClicked={isClicked} />;
};
