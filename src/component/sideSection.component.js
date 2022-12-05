import SideFile from "../files/sideSection"
const CreativeComponent = ({text1, largeText, button}) => {
    const SideText= [
               {text1,  largeText, button, id : 1}
            ]
            return (
                <div className="side">

                    <SideFile SideText = {SideText} text1 = "CREATIVE MIND, INNOVATIVE WORKS" largeText = "Make Your Env Configuration Easy" button = "Get Started"/>
                </div>
            )
    
}
export default CreativeComponent