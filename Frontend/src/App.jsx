import Header from  "./Component/Header"
import Footer  from "./Component/Footer"
import Homme  from "./Component/Homme" 
// import  Herrosection  from "./Component/Herrosection"
import Contact from "./Component/Contactus"
import Specialiter from "./Component/Specialiter"

function App() {
    return (
      <>
        <Header />
        <Homme />
        <div className="m-24">
          <Specialiter />
        </div>
       
       
        <Footer />
      </>
    );
  }
  
  export default App;
  


