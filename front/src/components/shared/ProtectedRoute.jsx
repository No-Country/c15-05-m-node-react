import React from 'react'
import { Navigate } from "react-router-dom"
import { validateSession } from '../../helpers/utils'

export const ProtectedRoute = ({ children }) => {
  return validateSession() ? (
    <div>
      {children}
    </div>
  ) : (
    <Navigate replace to='/login' />
  )
};