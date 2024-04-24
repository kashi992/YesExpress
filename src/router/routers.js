import { Routes,Route} from "react-router-dom"
import Home from '../pages/home/index'
import Services from "../pages/service"
import AddReceipt from "../pages/addReceipt"

const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/add-receipt" element={<AddReceipt/>} />
  </Routes>
  )
}

export default Routers
