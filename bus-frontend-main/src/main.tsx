import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import StripeProvider from './StripeProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StripeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StripeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)