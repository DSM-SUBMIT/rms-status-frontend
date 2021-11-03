import React from 'react';
import { Provider } from 'react-redux';
import store from './modules/redux/store';
import RootRouter from './route/RootRouter';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
}

export default App;
