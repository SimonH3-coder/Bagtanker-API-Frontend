import { BrowserRouter, Routes, Route } from 'react-router'
import { Frontpage } from './pages/Frontpage.jsx'
import { Estatepage } from './pages/Estatepage.jsx'
import { EstateDetailspage } from './pages/EstateDetailspage.jsx'
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
            <Route path="/estates" index element={<Estatepage />} />
            <Route path="/estates/:id" index element={<EstateDetailspage />} />

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
