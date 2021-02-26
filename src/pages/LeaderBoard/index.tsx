import React, { useMemo } from 'react';

import { Paper } from '@components';

import { S } from '@pages/units';

import { Row } from './Row';

import { DataWindow } from './units';
import { IRowProps } from './Row/types';

const rowData: IRowProps[] = [
    {
        userName: 'vasya',
        score: 99999,
    },
    {
        userName: 'petya',
        score: 88888,
    },
];

const getRows = () => {
    let result: any = [];
    let globalIndex = 1;

    for (let i = 0; i < 10; i++) {
        const rows = rowData.map(({ score, userName }) => (
            <Row
                key={globalIndex}
                score={score}
                userName={`${globalIndex++}.${userName}`}
                isEven={globalIndex % 2 === 0}
            />
        ));

        result = [...result, rows];
    }
    return result;
};

export const LeaderBoard = () => {
    const rows = useMemo(getRows, [rowData]);

    return (
        <S.WrapperPage background={true}>
            <Paper
                w={'70%'}
                maxw={'1000px'}
                minw={'500px'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <S.TitlePage style={{ marginTop: '90px' }}>
                    Таблица лидеров
                </S.TitlePage>

                <DataWindow>
                    <Row userName={'Пользователь'} score={'Очки'} />
                    {rows}
                </DataWindow>
            </Paper>
        </S.WrapperPage>
    );
};
