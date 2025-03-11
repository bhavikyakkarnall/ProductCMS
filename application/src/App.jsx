import React from "react"
import AppRoute from './routes/AppRoute'
import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
    <>
    <AppRoute/>
    </>
  )
}

export default withAuthenticator(App);
