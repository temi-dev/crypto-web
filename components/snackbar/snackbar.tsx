import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { SnackbarProviderProps } from 'material-ui-snackbar-provider/lib/SnackbarProvider'

interface ItestS{
  message?: any,
  action ?: any,
  ButtonProps?: any,
  SnackbarProps?: any,
  customParameters?: any
}
export default function CustomSnackbar ({
  message,
  action,
  ButtonProps,
  SnackbarProps,
  customParameters
}: ItestS) : any {
  return (
    <Snackbar autoHideDuration={3000} {...SnackbarProps}>
      <Alert
        severity={customParameters?.type}
        action={action != null && (
          <Button color='inherit' size='small' {...ButtonProps}>
            {action}
          </Button>
        )}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

