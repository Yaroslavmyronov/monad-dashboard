import { Route, Routes } from 'react-router';
import Home from '../components/Home/Home';
import Blocks from '../pages/Blocks';

function AppRoutes() {
  const navigationRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/blocks',
      element: <Blocks />,
    },
  ];
  return (
    <Routes>
      {navigationRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element}></Route>
      ))}
    </Routes>
  );
}

export default AppRoutes;
