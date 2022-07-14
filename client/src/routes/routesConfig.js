import { 
  HomePage, 
  SoldiersPage, 
  ValorsPage,
  PhotosPage, 
  NotFoundPage,
  SoldierPage,
  ValorPage,
  PhotoPage,
  SignInPage
} from '../pages';

const routesConfig = [
  {
    id: 'home-page',
    element: <HomePage />,
    index: true
  },
  {
    id: 'signin-page',
    element: <SignInPage />,
    path: 'auth/signin'
  },
  {
    id: 'soldiers-page',
    element: <SoldiersPage />,
    path: 'soldiers',
  },
  {
    id: 'soldier-page',
    element: <SoldierPage />,
    path: 'soldiers/:id',
  },
  {
    id: 'valors-page',
    element: <ValorsPage />,
    path: 'valors',
  },
  {
    id: 'valor-page',
    element: <ValorPage />,
    path: 'valors/:id',
  },
  {
    id: 'photos-page',
    element: <PhotosPage />,
    path: 'photos',
  },
  {
    id: 'photo-page',
    element: <PhotoPage />,
    path: 'photos/:id',
  },
  {
    id: 'not-found',
    path: '*',
    element: <NotFoundPage />
  },
]

export default routesConfig
