const MainImageFile = (props) => {
      return(
              <div className="img-flex">
                  <div className="img-flex-read">
                  <div className="myDiv-img">
                  <img src={props.img1} alt="mage" />
                  </div>
                  <div className="myDiv-img">
                  <img className="shift-up" src={props.phi} alt="mage" />
                  </div>
                  <div className="myDiv-img">
                  <img className="shift-left" src={props.office} alt="mage" />
                  </div>
                  </div>

                 
              </div>
           
         
      )
}
export default MainImageFile