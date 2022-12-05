import MainController from "../component/main.component";
import MainImageComponent from "../component/mainImage.component"
import TestimonialComponent from "../component/testimonial.component";
import FooterComponent from "../component/footer.component";
import '../css/mainabout.css'
const MainControllerComponent = () => {

        return (
            <div>
            <div className="main-contoller">
             <MainController />
             <MainImageComponent />
            </div>
            <div  className="tag-rating"> 
                <TestimonialComponent />

            </div>
            <div>
                <FooterComponent />
            </div>
           
            </div>
           
        )
  
}

export default MainControllerComponent