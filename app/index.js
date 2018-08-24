import React from 'react';
import { render } from 'react-dom';
import Main from './components/main';
import { Provider } from 'react-redux';
import store from './store';

render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));
