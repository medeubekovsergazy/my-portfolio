import React, {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CanvasLoader from "../src/components/Loader.jsx";

import './i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<div>...Loading</div>}>
          <App />
      </Suspense>
  </StrictMode>,
)
