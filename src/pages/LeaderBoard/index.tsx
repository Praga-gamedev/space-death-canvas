import React, { useMemo } from 'react';
import { DataWindow } from './units';
import { IRowProps } from './Row/types';
import { Row } from './Row';
import { StyledTitlePage, StyledWrapperPage } from '@pages/units';
import { Paper } from '@components';

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
        result = result.concat(rows);
    }
    return result;
};

export const LeaderBoard = () => {
    const rows = useMemo(getRows, [rowData]);
    return (
        <StyledWrapperPage background={true}>
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
                <StyledTitlePage style={{ marginTop: '10%' }}>
                    Таблица лидеров
                </StyledTitlePage>
                <DataWindow>
                    <Row userName={'Пользователь'} score={'Очки'} />
                    {rows}
                </DataWindow>
            </Paper>
        </StyledWrapperPage>
    );
};
