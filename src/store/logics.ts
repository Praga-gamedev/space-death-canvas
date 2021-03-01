import { connect } from 'kea';

import { logic as authPage } from '@store/AuthPage';

export const logicRouter = connect({
    values: [(state: Record<string, any>) => state, ['router']],
});

export const logicAuth = connect({
    actions: [authPage, ['resetUser']],
});
