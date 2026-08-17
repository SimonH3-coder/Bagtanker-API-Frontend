import { Header } from '../components/Header/Header.jsx'
import { Navigation } from '../components/Navigation/Navigation.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { Outlet } from 'react-router'

export function MainLayout() {
    return (
        <>
        <Header />
        <Navigation />
        <Outlet/>
        <Footer />
        
        </>

    )
}