import LinkFile from "../files/links.file"
const LinkComponent = ({home, contact, donate, getStarted, about}) => {
    const headerLink = [
        {
            home, contact, donate, getStarted, about, id : 1
        }
    ]
    return (
        <div className="flex-header-link-side">
            <div className="flex-sub-link-side">
             <LinkFile headerLink = {headerLink} home = "Home"/>
             <LinkFile headerLink = {headerLink} contact = "Contact"/>
             <LinkFile headerLink = {headerLink} donate = "Donate"/>
             <LinkFile headerLink = {headerLink} about = "About"/>
             <div className="getstart">
             <LinkFile headerLink = {headerLink} getStarted = "Get started"/>
             </div>
            
             </div>
        </div>
    )
}
export default LinkComponent