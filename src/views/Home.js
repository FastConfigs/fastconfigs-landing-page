import Logo from "../component/logo.component"
import LinkAddress from "../component/links.component"
import Contact from "../component/contact.component"
import StartedComponent from "../component/started.component"
import OurProject from "../component/what_we_do.component"
import "../css/header.css"
const Home = () => {
  return (
     <div>
        <div className="main-container">
           <div className="top-sub-down">
           <div className="flex-linker">
           < Logo/>      
           < LinkAddress />
           < Contact />
           </div>
           < StartedComponent />
           < OurProject />
           </div>
         
        </div>
     </div>
  )
}
export default Home
