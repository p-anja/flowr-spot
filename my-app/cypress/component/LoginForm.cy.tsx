import React from 'react'
import { Provider } from 'react-redux';
import LoginForm from '../../src/components/login/LoginForm';
import store from '../../src/store/store';

describe('<LoginForm>', () => {
  it('mounts', () => {
      cy.mount(
        <Provider store ={store}>
          <LoginForm/>
        </Provider>)
  })
})