import React, { FC } from 'react';

import { history } from '@store/initStore';

import { StyledLink } from './units';
import { ILinkProps } from './types';

export const Link: FC<ILinkProps> = ({ path, children, ...props }) => {
    const onClick = (e: Event) => {
        e.preventDefault();

        history.push(path);
    };

    return (
        <StyledLink onClick={(e: Event) => onClick(e)} {...props}>
            {children}
        </StyledLink>
    );
};
