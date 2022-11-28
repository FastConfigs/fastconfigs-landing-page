import AboutusFile from "../file/aboutus.file";

const Aboutus = ({
  text,
  sub_text,
}) => {
  const about = [
    { text, sub_text, id: 1 },
  ];
  return (
    <div>
     <AboutusFile about = {about} text = "About" sub_text = "We are more than a creative company"/>
    </div>
  );
};

export default Aboutus;
