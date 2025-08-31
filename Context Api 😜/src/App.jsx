import './App.css'
import UserContextApi from './Context/userContextApi'
import Login from './Context/login'
import Profile from './Context/profile'

function App() {


  return (

 <UserContextApi>
<h1 className='text-white'>hello ji kaise ho ap sab badoua</h1>
<Login/>
<Profile/>
</UserContextApi>

  )
}

export default App
