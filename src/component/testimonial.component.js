
import FileTestimonial from "../files/testimonial.file"

const testimonialComponent = ({
  tag_head,
  tag_text,
  tag,
  rating,
  profile,
  name,

  tag_text_1,
  tag_1,
  rating_1,
  profile_1,
  name_1,

  tag_text_2,
  tag_2,
  rating_2,
  profile_2,
  name_2,
}) => {
  const testimonial = [
    {
      tag_head,  tag,  tag_text,  rating,profile,  name, id : 1
    },
    {
     tag_text_1, tag_1, rating_1,profile_1, name_1, id : 2
    },
    {
      tag_2,  tag_text_2,  rating_2,profile_2,  name_2, id : 3
    },
  ];

  return (
    <div>
    <FileTestimonial
      testimonial={testimonial}
      tag_head="Testimonials"
      tag="./Image/tag.png"
      tag_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex."
      rating = "./Image/rating.png"
      profile = "./Image/p1.png"
      name    = "femi fatokun"
      tag_1="./Image/tag.png"
      tag_text_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex."
      rating_1 = "./Image/rating.png"
      profile_1 = "./Image/p2.png"
      name_1    = "Samson Onifade"
      tag_2="./Image/tag.png"
      tag_text_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex."
      rating_2 = "./Image/rating.png"
      profile_2 = "./Image/p3.png"
      name_2    = "Daniel Adewale"
    />
    </div>
  );
};
export default testimonialComponent