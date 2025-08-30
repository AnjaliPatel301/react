import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider,createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contect/context'
import Github from './components/Github/github'
import User from './components/User/user'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path="/contect" element={<Contact/>}/>
     <Route path='/githup' element={<Github/>}/>
     <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
