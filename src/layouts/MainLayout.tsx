import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-full flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 basis-auto grow shrink">
        <Outlet />
      </main>
    </div>
  );
}
