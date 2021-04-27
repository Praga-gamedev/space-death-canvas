import React, { FC, memo } from 'react';
import { useActions, useValues } from 'kea';

import { colors } from 'src/theme';

import starIcon from '@icons/star-icon.png';
import rubyIcon from '@icons/ruby-icon.png';

import { useMountEffect } from 'src/utils/hooks';

import { logic } from 'src/store/LeaderboardPage';
import { logic as logicAuth } from 'src/store/AuthPage';

import { ILeaders } from '@pages/LeaderboardPage/types';

import { S } from './units';

const findUser = (leaders: ILeaders[], user: string) => {
    const place = leaders.findIndex((item) => item.data.name === user) + 1;

    const score = leaders.find((item) => item.data.name === user)?.data
        .sdcScore;

    return [place, score];
};

export const Stats: FC = memo(() => {
    const { getLeaders } = useActions(logic);
    const { leaders } = useValues(logic) as { leaders: ILeaders[] };
    const { user } = useValues(logicAuth);

    useMountEffect(getLeaders);

    const [place, score] = findUser(leaders, user?.login);

    return (
        <S.StatBlock>
            <S.StatTitle>Статистика</S.StatTitle>

            <S.StatPaper>
                <S.IconWrapper color={colors.lightBlue}>
                    <img src={starIcon} />
                </S.IconWrapper>

                <S.StatInfo>
                    <S.StatResult>{score || 'Нет данных'}</S.StatResult>
                    <S.StatName>Ваш лучший результат</S.StatName>
                </S.StatInfo>
            </S.StatPaper>

            <S.StatPaper>
                <S.IconWrapper color={colors.GrayScale_0}>
                    <img src={rubyIcon} />
                </S.IconWrapper>

                <S.StatInfo>
                    <S.StatResult>{place || 'Нет данных'}</S.StatResult>
                    <S.StatName>Место в топе</S.StatName>
                </S.StatInfo>
            </S.StatPaper>
        </S.StatBlock>
    );
});
