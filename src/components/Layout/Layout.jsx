import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Appbar from 'components/Appbar';
import AppFooter from 'components/AppFooter';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Appbar />
      <main>
        <Suspense>
          <Outlet fallback={<Loader />} />
        </Suspense>
      </main>
      <AppFooter />
    </>
  );
};

export default Layout;
