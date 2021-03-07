import { connect } from 'kea';

export const logicRouter = connect({
    values: [(state: Record<string, any>) => state, ['router']],
});
