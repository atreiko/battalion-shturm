import { 
  HomePage, 
  SoldiersPage, 
  ValorsPage,
  PhotosPage, 
  NotFoundPage,
} from '../pages';

const routesConfig = [
  {
    id: 'home-page',
    element: <HomePage />,
    index: true
  },
  {
    id: 'soldiers-page',
    element: <SoldiersPage />,
    path: 'soldiers',
  },
  {
    id: 'valors-page',
    element: <ValorsPage />,
    path: 'valors',
  },
  {
    id: 'photos-page',
    element: <PhotosPage />,
    path: 'photos',
  },
  {
    id: 'not-found',
    path: '*',
    element: <NotFoundPage />
  },
]

export default routesConfig