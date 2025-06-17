import Home from '@/components/Home/Home';
import NotFound from '@/components/NotFound';

import MainLayout from '@/layouts/MainLayout';
import { SignalRProvider } from '@/providers/SignalRProvider';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const BlockPage = lazy(() => import('@/pages/BlocksPage'));
const NftsPage = lazy(() => import('@/pages/NftsPage'));
const TokensPage = lazy(() => import('@/pages/TokensPage'));
const TransactionsPage = lazy(() => import('@/pages/TransactionsPage'));

function AppRoutes() {
  return (
    <SignalRProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="blocks"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex items-center justify-center">
                    <div className="loading loading-spinner"></div>
                  </div>
                }
              >
                <BlockPage />
              </Suspense>
            }
          />
          <Route
            path="nfts"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex items-center justify-center">
                    <div className="loading loading-spinner"></div>
                  </div>
                }
              >
                <NftsPage />
              </Suspense>
            }
          />
          <Route
            path="tokens"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex items-center justify-center">
                    <div className="loading loading-spinner"></div>
                  </div>
                }
              >
                <TokensPage />
              </Suspense>
            }
          />
          <Route
            path="transactions"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex items-center justify-center">
                    <div className="loading loading-spinner"></div>
                  </div>
                }
              >
                <TransactionsPage />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </SignalRProvider>
  );
}

export default AppRoutes;
