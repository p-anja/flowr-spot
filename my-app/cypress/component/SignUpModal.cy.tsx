import React from 'react'
import { Provider } from 'react-redux';
import HomePage from '../../src/pages/HomePage'
import store from '../../src/store/store';

describe('Test modal opening', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

    it('Opening sign up modal', () => {
        cy.mount(
        <Provider store ={store}>
            <HomePage/>
        </Provider>
        )

        cy.contains('New account').click()
    })

})