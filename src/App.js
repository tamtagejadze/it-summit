import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Speakers from './components/Speakers/Speakers';
import Summit from './components/Summit/Summit';
import './i18next/i18n'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/speakers' element={<Speakers/>} />
          <Route path='/summit' element={<Summit/>} />
          <Route path='/registration' element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
