import starIcon from '@icons/star-icon.png';
import rubyIcon from '@icons/ruby-icon.png';

import { IStat } from './types';

export const defaultStats: IStat[] = [
    {
        color: '#9091EE',
        icon: starIcon,
        label: 'Лучший результат',
        name: 'best_result',
        value: '2 562',
    },
    {
        color: '#F1DEFF',
        icon: rubyIcon,
        label: 'Место в топе',
        name: 'top_place',
        value: '15',
    },
];
