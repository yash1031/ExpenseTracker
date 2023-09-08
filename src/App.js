import './App.css'
import Home from './pages/home'
import Header from './components/header'
import AddExpense from './pages/add-Expense'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

function App () {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-Expense' element={<AddExpense />} />
          {/* <AddExpense /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
