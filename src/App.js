import TopBar from "./layout/topBar/topBar";
import Navbar from "./layout/navbar/navbar";
import Routers from "./router/routers";
import Footer from "./layout/footer/footer";
import ScrollTop from "./router/ScrollTop";
import MaintenancePage from "./MaintenancePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <ScrollTop/>
      <TopBar />
      <Navbar />
      <Routers />
      <Footer/> */}
      <MaintenancePage/>
    </div>
  );
}

export default App;
