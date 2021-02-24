import React from 'react';
import {BookstoreConsumer } from '../bookstoreContext/bookstoreContext'

export const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreConsumer>
                {
                    (bookstoreService) => {
                      return (<Wrapped {...props} bookstoreService={bookstoreService}/>)
                    }
                }
            </BookstoreConsumer>
        )
    }
}

