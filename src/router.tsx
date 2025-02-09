import { createBrowserRouter } from 'react-router-dom';
import GreenLogin from './pages/GreenLogin';
import { ROUTES_LIST } from './constants';

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.green,
    element: <GreenLogin />,
  },
]);

export default router;
