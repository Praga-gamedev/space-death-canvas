import React, { FC } from 'react';

import { history } from '@store/initStore';

import { S } from './units';
import { ILinkProps } from './types';

export const Link: FC<ILinkProps> = ({ path, children, ...props }) => {
    const onClick = (e: Event) => {
        e.preventDefault();

        history.push(path);
    };

    return (
        <S.Link
            data-test-id="link-test-id"
            onClick={(e: Event) => onClick(e)}
            {...props}
        >
            {children}
        </S.Link>
    );
};
