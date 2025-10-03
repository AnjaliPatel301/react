import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store  } from './store.js'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Autoprovider } from './ContextFolder/auth-path.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <Autoprovider>
              <App />
            </Autoprovider>
        </BrowserRouter>
    </Provider>
  </StrictMode>,
)
