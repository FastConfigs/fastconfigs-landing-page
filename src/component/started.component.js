import Started from "../file/started.file"
const StartedComponent = ({text, digital, getStarted}) => {
      const Side_text = [
          {text, digital, getStarted, id : 1},
     
      ]
      return (
          <div>
            
              < Started Side_text = {Side_text} text="CREATIVE MIND, CREATIVE WORK" digital="We Are Digital Agency"getStarted="Get Started"/>
    
          </div>
      )
}
export default StartedComponent