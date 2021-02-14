import React, { FC, memo } from 'react';

import { S } from './units';

import { IStat } from '@pages/ProfilePage/types';

export interface IStatsProps {
    stats?: IStat[];
}

export const Stats: FC<IStatsProps> = memo(({ stats = [] }) => {
    return (
        <div>
            <S.StatTitle>Статистика</S.StatTitle>

            {stats.map((stat) => (
                <S.StatPaper key={stat.name}>
                    <S.IconWrapper color={stat.color}>
                        <img src={stat.icon} />
                    </S.IconWrapper>

                    <S.StatInfo>
                        <S.StatResult>{stat.value}</S.StatResult>
                        <S.StatName>{stat.label}</S.StatName>
                    </S.StatInfo>
                </S.StatPaper>
            ))}
        </div>
    );
});
