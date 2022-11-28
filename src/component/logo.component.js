import HeaderLogo from "../file/logo.file"
import "../css/links.css";
const Logo = (title) => {
    const logo = [
        {title, id: 1}, 
      ]
      return (
           <div className="logo">
             <HeaderLogo logo={logo} title="Logo" />
             </div>
           
        
        )
}
export default Logo