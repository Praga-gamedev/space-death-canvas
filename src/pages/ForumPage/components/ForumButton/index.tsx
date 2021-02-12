import React, { FC } from 'react';

import { ForumStyledButton } from '@pages/ForumPage/components/ForumButton/units';
import { IForumButtonProps } from '@pages/ForumPage/components/ForumButton/types';

export const ForumButton: FC<IForumButtonProps> = ({ isClicked, ...props }) => {
    return <ForumStyledButton {...props} isClicked={isClicked} />;
};
