
import {Routes, Route} from 'react-router-dom'
import Navbar from "../../components/Navbar"
import About from '../About/About'
import Contact from '../Contact/Contact'
import SearchBar from '../../components/SearchBar'
import BlogList from '../../components/BlogList'
import BlogDetails from '../../components/BlogDetails'
import ThemeContext from '../../contexts/theme'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
// import {useDebounce} from '@uidotdev/usehooks'


function Main() {
    const [blogs, setBlogs] = useState(null)
    const [query, setQuery] = useState('')
    const debouncedSearchTerm = useDebounce(query, 300); 
    useEffect(() => {
        console.log('fetching data')
        fetch('http://127.0.0.1:3000/blogs', )
        .then((resp) => {
          console.log(resp)
          return resp.json();
        })
        .then((data) => {
            const result = data && data.filter((blog) => {
                return blog.title.includes(query) || blog.content.includes(query)
            })
            setBlogs(result)
        })
        .catch(error => {
          console.log('An error has occured')
          console.error(error)
        })
        return () => {
        }
      }, [debouncedSearchTerm]);
    const onSearch = (query) => {
        setQuery(query)
    }
    return <>
      <SearchBar onSearch={(newQuery) => onSearch(newQuery)}/>
      <BlogList blogs={blogs}/>
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