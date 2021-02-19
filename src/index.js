import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app';
import BookstoreService from './services/bookstoreService'
import ErrorBoundry from './components/error/errorBoundry';
import {BookstoreProvider} from './components/bookstoreContext/bookstoreContext';

import store from './redux/store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreProvider value={bookstoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookstoreProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)