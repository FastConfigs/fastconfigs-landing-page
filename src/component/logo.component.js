import LogoFile from "../files/logo.file"
const LogoComponent = ({logo}) => {
    const logoStack = [
        {
            logo, id : 1
        }
    ]
    return (
        <div className="logo">
             <LogoFile logoStack = {logoStack} logo = "./image/FastConfigs.png"/>
        </div>
    )
}
export default LogoComponent