import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { MainHeader } from './Components/MainHeaders';
import DashBoard from './pages/DashBoard'
import { Toaster } from 'sonner';
import MutipleOptionCalculator from './pages/MutipleOptionCalculator';

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route path="" element={<DashBoard />} />
            <Route path="/options" element={<MutipleOptionCalculator />} />
            <Route path="*" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
