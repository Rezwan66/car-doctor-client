import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/Error/ErrorPage';
import CheckOut from '../pages/CheckOut/CheckOut';
import Bookings from '../pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
