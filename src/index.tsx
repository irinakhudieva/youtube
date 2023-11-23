import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './firebase';
import ThemeProvider from './provider/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <ThemeProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <App />
              </PersistGate>
          </Provider>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

