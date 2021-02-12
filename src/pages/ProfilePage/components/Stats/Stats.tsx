import React, { FC, memo } from 'react';

import {
    IconWrapper,
    StatInfo,
    StatName,
    StatPaper,
    StatResult,
    StatTitle,
} from './units';

import { IStat } from '@pages/ProfilePage/types';

export interface IStatsProps {
    stats?: IStat[];
}

export const Stats: FC<IStatsProps> = memo(({ stats = [] }) => {
    return (
        <div>
            <StatTitle>Статистика</StatTitle>

            {stats.map((stat) => (
                <StatPaper key={stat.name}>
                    <IconWrapper color={stat.color}>
                        <img src={stat.icon} />
                    </IconWrapper>

                    <StatInfo>
                        <StatResult>{stat.value}</StatResult>
                        <StatName>{stat.label}</StatName>
                    </StatInfo>
                </StatPaper>
            ))}
        </div>
    );
});
