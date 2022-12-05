const testimonialFile = (props) => {
  return (
    <div className="testimonial-class">
      <h3>{props.tag_head}</h3>
      <div className="flex-sub-container">
        <div className="flex-container">
          <div className="flex-tag-inner">
            <div className="flex-tag-flag">
              <img src={props.tag} alt="mage" />
              <br></br>
              <div className="tag-small">
                <small>{props.tag_text} </small>
              </div>
              <br></br>
              <img src={props.rating} alt="mage" />
            </div>
          </div>
          <div>
            <div className="mytest-class">
              <div className="sub-container">
                <img src={props.profile} alt="mage" />
               
              </div>
              <div className="tag-name">
              <p>{props.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-tag-inner">
            <div className="flex-tag-flag">
              <img src={props.tag_1} alt="mage" />
              <br></br>
              <div className="tag-small">
                <small>{props.tag_text_1} </small>
              </div>
              <br></br>
              <img src={props.rating_1} alt="mage" />
            </div>
          </div>
          <div>
          <div className="mytest-class">
              <div className="sub-container">
                <img src={props.profile_1} alt="mage" />
                
              </div>
              <div className="tag-name">
              <p>{props.name_1}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-tag-inner">
            <div className="flex-tag-flag">
              <img src={props.tag} alt="mage" />
              <br></br>
              <div className="tag-small">
                <small>{props.tag_text_2} </small>
              </div>
              <br></br>
              <img src={props.rating_2} alt="mage" />
            </div>
          </div>
          <div>
          <div className="mytest-class">
              <div className="sub-container">
                <img src={props.profile_2} alt="mage" />
                
              </div>
              <div className="tag-name">
              <p>{props.name_2}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default testimonialFile;
