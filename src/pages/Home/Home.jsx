
import {Routes, Route} from 'react-router-dom'
import Navbar from "../../components/Navbar"
import About from '../About/About'
import Contact from '../Contact/Contact'
import SearchBar from '../../components/SearchBar'
import BlogList from '../../components/BlogList'
import BlogDetails from '../../components/BlogDetails'
import ThemeContext from '../../contexts/theme'
import { useState } from 'react'


function Main() {
    return <>
      <SearchBar />
      <BlogList/>
    </>
  }

export default function Home() {
    const [theme, setTheme] = useState('light')

    const handleThemeToggle = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    return <>
        <ThemeContext.Provider value={theme}>
            <Navbar handleThemeToggle={handleThemeToggle}/>
            <div className={theme == 'light' ? "content" : "content dark"}>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/blogs/:id' element={<BlogDetails />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </div>
        </ThemeContext.Provider>
    </>
}