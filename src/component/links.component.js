import LinkFile from "../file/links.file";
import "../css/links.css";
const LinkAddress = ({ link1, link2, link3, link4, link5 }) => {
  const links = [
    { link1, id: 1 },
    { link2, id: 2 },
    { link3, id: 3 },
    { link4, id: 4 },
    { link5, id: 5 },
  ];

  return (
    <div className="contact-flex-sub">
      <div className="contact-flex">
        <LinkFile links={links} link1="Home" />
        <LinkFile links={links} link3="About Us" />
        <LinkFile links={links} link4="Donate" />
        <LinkFile links={links} link5="Get Started" />
      </div>
    </div>
  );
};
export default LinkAddress;
