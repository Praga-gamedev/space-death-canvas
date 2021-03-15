import React, { FC, useState, useRef, memo } from 'react';
import { useValues } from 'kea';

import { history } from '@store/initStore';
import { logicRouter } from '@store/logics';

import { Popup } from './Popup';

import { S } from './units';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = memo(({ tabs }) => {
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
                    /* стоит ли вот для таких коротких записей писать отдельные ф-ии с useCallback?
                                     не понимаю, почему здесь может произойти перерендер (к ревьюверу) */
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
});
