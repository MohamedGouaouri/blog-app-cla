
import {Routes, Route} from 'react-router-dom'
import Navbar from "../../components/Navbar"
import About from '../About/About'
import Contact from '../Contact/Contact'
import SearchBar from '../../components/SearchBar'
import BlogList from '../../components/BlogList'
import BlogDetails from '../../components/BlogDetails'


function Main() {
    return <>
      <SearchBar />
      <BlogList/>
    </>
  }

export default function Home() {
    return <>
        <Navbar/>
        <div className="content">
            <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/blogs/:id' element={<BlogDetails />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/about' element={<About />}/>

            </Routes>
        </div>
    </>
}