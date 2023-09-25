import Content from './components/Content';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { KatexInputRefProvider } from './contexts/katexInputContext';

function App() {
  return (
    <div className='h-full flex flex-col'>
      <Header />
      <div className='w-full grow relative overflow-hidden'>
        <KatexInputRefProvider>
          <Content />
          <Sidebar />
        </KatexInputRefProvider>
      </div>
    </div>
  );
}

export default App;
