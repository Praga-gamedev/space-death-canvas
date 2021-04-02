import React, { memo } from 'react';

import { Paper } from '@components';

import { S } from '@pages/units';

import { Table } from './components/Table';

export const LeaderboardPage = memo(() => {
    return (
        <S.WrapperPage background={true}>
            <Paper
                w={'70%'}
                maxw={'1200px'}
                minw={'800px'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 24px',
                }}
            >
                <S.TitlePage style={{ margin: '90px 0px 40px' }}>
                    Таблица лидеров
                </S.TitlePage>

                <Table />
            </Paper>
        </S.WrapperPage>
    );
});
