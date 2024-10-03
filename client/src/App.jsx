import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/Auth/ProtectRoute'

const Home = lazy(()=> import("./pages/Home"))
const Login = lazy(()=> import("./pages/Login"))
const Groups = lazy(()=> import("./pages/Groups"))
const Chat = lazy(()=> import("./pages/Chat"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ProtectRoute user={user}> <Home/> </ProtectRoute>} /> */}
        <Route element={<ProtectRoute user={user}/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat/:chatId' element={<Chat/>} />
          <Route path='/group' element={<Groups/>} />
        </Route>
        <Route path='/login' element={<ProtectRoute user={!user} redirect="/"> <Login/> </ProtectRoute>} />


        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App