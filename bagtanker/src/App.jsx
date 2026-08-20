import { BrowserRouter, Routes, Route } from 'react-router'
import { Frontpage } from './pages/Frontpage.jsx'
import { Productpage } from './pages/Productpage.jsx'
import { ProductDetailspage } from './pages/ProductDetailspage.jsx'
import { Loginpage } from './pages/Loginpage.jsx'
import { SearchResultspage } from './pages/SearchResultspage.jsx'
import { Contactpage } from './pages/Contactpage.jsx'
import { MainLayout } from './layout/MainLayout.jsx'


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<MainLayout />}>

            <Route path="/" index element={<Frontpage />} />
            <Route path="/products" index element={<Productpage />} />
            <Route path="/products/:id" index element={<ProductDetailspage />} />

            <Route path="/login" index element={<Loginpage />} />

            <Route path="/search" index element={<SearchResultspage />} />
            <Route path="/contact" index element={<Contactpage />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>

  )
}

export default App
