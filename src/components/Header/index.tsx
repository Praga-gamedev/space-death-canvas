import React, { FC, useState, useRef } from 'react';
import { kea, useValues } from 'kea';

import { history } from '@store/initStore';

import { Popup } from './Popup';

import { S } from './units';
import { IHeaderProps } from './types';

const logicRouter = kea({
    connect: () => ({
        values: [(state: Record<string, any>) => state, ['router']],
    }),
});

export const Header: FC<IHeaderProps> = ({ tabs }) => {
    const {
        router: {
            location: { pathname },
        },
    } = useValues(logicRouter);

    const [isOpen, setOpen] = useState<boolean>(false);

    const buttonRef = useRef<HTMLDivElement | undefined>();

    const isActive = (path: string) => path === pathname;

    return (
        <S.Header>
            {tabs.map(({ path, title }) => (
                <S.Tab
                    key={path}
                    isActive={isActive(path)}
                    onClick={() => history.push(path)}
                >
                    {title}
                </S.Tab>
            ))}

            <S.DropdownWrapper>
                <S.DropdownArrow
                    ref={buttonRef}
                    onClick={() => {
                        setOpen(!isOpen);
                    }}
                    isOpen={isOpen}
                />

                <Popup
                    buttonRef={buttonRef}
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            </S.DropdownWrapper>
        </S.Header>
    );
};
