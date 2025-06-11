import Header from './components/Header';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="min-h-full flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 basis-auto grow shrink">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
