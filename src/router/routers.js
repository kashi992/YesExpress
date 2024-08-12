import { Routes,Route} from "react-router-dom"
import Home from '../pages/home/index'
import Services from "../pages/service"
import AddReceipt from "../pages/addReceipt"
import Contact from "../pages/contact"
import About from "../pages/about"
import Dashboard from "../pages/dashboard"
import TrackShipment from "../pages/trackShipment"
import PreviousInvoices from "../pages/dashboard/previousReceipt"
import GetQuote from "../pages/getQuote"
import Profile from "../pages/profile/Profile"
import EditProfile from "../pages/profile/EditProfile"
import ResetPassword from "../pages/resetPassword"
import FAQS from "../pages/faqs"
import Products from '../pages/products/index';

const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/book-shipment" element={<AddReceipt/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Products/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/track-shipment" element={<Home/>} />
    <Route path="/track-shipment/:invoiceId" element={<TrackShipment/>} />
    <Route path="/previous-receipt" element={<PreviousInvoices/>} />
    <Route path="/get-quote" element={<GetQuote/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/edit-profile" element={<EditProfile/>} />
    <Route path="/reset-password/" element={<Home/>} />
    <Route path="/faqs" element={<FAQS/>} />
    <Route path="/reset-password/:token" element={<ResetPassword/>} />
  </Routes>
  )
}

export default Routers
