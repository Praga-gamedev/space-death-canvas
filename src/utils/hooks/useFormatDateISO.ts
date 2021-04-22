import { format } from 'date-fns';

export const useFormatDateISO = (date: string) => {
    const dateNumber = format(new Date(date), 'dd/MM/yyyy');
    const time = format(new Date(date), 'HH:mm:ss');

    return [dateNumber, time];
};
