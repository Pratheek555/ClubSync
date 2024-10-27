import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <Provider> */}
    <NextUIProvider>
      <main className='dark text-foreground bg-background h-screen w-full'>
        <App />
      </main>
    </NextUIProvider>
    {/* </Provider> */}
  </StrictMode>,
)
