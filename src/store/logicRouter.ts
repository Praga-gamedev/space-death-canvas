import { kea } from 'kea';

export const logicRouter = kea({
    connect: () => ({
        values: [(state: Record<string, any>) => state, ['router']],
    }),
});
