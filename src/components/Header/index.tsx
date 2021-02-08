import React, { FC } from 'react';
import { kea, useValues } from 'kea';

import { history } from '@store/initStore';

import { StyledHeader, StyledTab } from './units';

import { IHeaderProps } from './types';

const logicRouter = kea({
    connect: () => ({
        values: [(state: Record<string, any>) => state, ['router']],
    }),
});

const Header: FC<IHeaderProps> = ({ tabs }) => {
    const {
        router: {
            location: { pathname },
        },
    } = useValues(logicRouter);

    const isActive = (path: string) => {
        return path === pathname;
    };

    return (
        <StyledHeader>
            {tabs.map(({ path, title }) => {
                return (
                    <StyledTab
                        key={path}
                        isActive={isActive(path)}
                        onClick={() => history.push(path)}
                    >
                        {title}
                    </StyledTab>
                );
            })}
        </StyledHeader>
    );
};

export default Header;
