import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../components/App';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('My HomePage', () => {
  it('render My HomePage Component', () => {
    render(<App />);
    expect(App).toMatchSnapshot();
  });
});

export default render;