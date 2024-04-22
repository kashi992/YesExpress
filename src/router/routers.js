import { Routes,Route} from "react-router-dom"
import Home from '../pages/home/index'

const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
  </Routes>
  )
}

export default Routers
