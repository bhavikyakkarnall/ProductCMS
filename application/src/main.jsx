import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Amplify } from "aws-amplify"
import awsexport from "./aws-exports"
Amplify.configure(awsexport)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
