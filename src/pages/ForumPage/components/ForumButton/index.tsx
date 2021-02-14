import React, { FC } from 'react';

import { ForumStyledButton } from './units';
import { IForumButtonProps } from './types';

export const ForumButton: FC<IForumButtonProps> = ({ isClicked, ...props }) => {
    return <ForumStyledButton {...props} isClicked={isClicked} />;
};
