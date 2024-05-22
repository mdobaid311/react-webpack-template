import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router';

import Loader from './components/loader';
import routes from './routes';

function App() {
    const { t } = useTranslation();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {t('home.description')}
            <Switch>
                {routes.map(({ name, path, Component }, index) => (
                    <Route key={name + index} path={path} exact>
                        <Suspense fallback={<Loader />}>
                            <Component />
                        </Suspense>
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

export default App;
