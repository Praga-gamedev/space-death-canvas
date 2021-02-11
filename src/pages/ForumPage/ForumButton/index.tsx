import React, { FC } from 'react';

import { ForumStyledButton } from '@pages/ForumPage/ForumButton/units';
import { IForumButtonProps } from '@pages/ForumPage/ForumButton/types';

export const ForumButton: FC<IForumButtonProps> = ({ isClicked, ...props }) => {
    return <ForumStyledButton {...props} isClicked={isClicked} />;
};
