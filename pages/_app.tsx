import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import 'animate.css';
import { SnackbarProvider } from "material-ui-snackbar-provider";

import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { AppProvider } from '../shared/contexts/app.context';
import { AuthGuard } from '../components/auth/auth-guard';
import { AuthProvider } from '../components/auth/auth-provider';
import { NextPage } from 'next';
import { LoggedInAuthGuard } from '../components/auth/auth-guard-logged-in';
import CustomSnackbar from '../components/snackbar/snackbar';

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
  loggedInRedirect?: boolean
}

function MyApp({ Component, pageProps }: { Component: NextApplicationPage; pageProps: any }) {

  useEffect(() => {
    document.body.className = pageProps.blue ? 'blue-bg' : '';
  });
  return (
    <>
      <title>Kochure - Web</title>
      <meta name="description" content="Kochure Web" />
      <meta name="theme-color" content="#1d38e4" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <AuthProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <AppProvider>
              <SnackbarProvider SnackbarComponent={CustomSnackbar}
              SnackbarProps={{ autoHideDuration: 4000, anchorOrigin: { vertical: 'top', horizontal: 'right' } }}>
              <Component {...pageProps} />
            </SnackbarProvider>
            </AppProvider>
          </AuthGuard>
        ) : Component.loggedInRedirect ? (
          <AppProvider>
            <LoggedInAuthGuard>
            <SnackbarProvider SnackbarComponent={CustomSnackbar}
              SnackbarProps={{ autoHideDuration: 4000, anchorOrigin: { vertical: 'top', horizontal: 'right' } }}>
              <Component {...pageProps} />
            </SnackbarProvider>
            </LoggedInAuthGuard>
          </AppProvider>
        ) : (
          // public page
          <AppProvider>
            <SnackbarProvider SnackbarComponent={CustomSnackbar}
              SnackbarProps={{ autoHideDuration: 4000, anchorOrigin: { vertical: 'top', horizontal: 'right' } }}>
              <Component {...pageProps} />
            </SnackbarProvider>
          </AppProvider>
        )}
      </AuthProvider>

    </>
  )
}

export default MyApp
