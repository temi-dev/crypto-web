import React from 'react'
import { useSnackbar } from 'material-ui-snackbar-provider';

export default function useCustomSnackbar () {
  const snackbar = useSnackbar()
  return React.useMemo(() => {
    const showMessage = (type: string) => (
      message?: any,
      action?: any,
      handleAction?: any,
      customParameters?: any
    ) =>
      snackbar.showMessage(message, action, handleAction, {
        ...customParameters,
        type
      })
    return {
      ...snackbar,
      showMessage: showMessage('info'),
      showInfo: showMessage('info'),
      showWarning: showMessage('warning'),
      showError: showMessage('error'),
      showSuccess: showMessage('success')
    }
  }, [snackbar])
}