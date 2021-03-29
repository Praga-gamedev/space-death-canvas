import React, { FC } from 'react';

import { useHistory } from 'react-router';

import { S } from './units';
import { ILinkProps } from './types';

export const Link: FC<ILinkProps> = ({ path, children, ...props }) => {
    const history = useHistory();

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
