import { SignInPage, AdminPage } from '../pages'

const protectedRoutesConfig = [
  {
    id: 'signin-page',
    element: <SignInPage />,
    path: 'auth/signin'
  },
  {
    id: 'admin',
    element: <AdminPage />,
    path: 'admin'
  }
]

export default protectedRoutesConfig