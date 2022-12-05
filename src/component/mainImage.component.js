import MainImageFile from "../files/mainImage.file";

const MainImageComponent = ({ img1, phi, office }) => {
  const MainImage = [
    {
      img1,
    },
    {
      phi,
    },
    {
      office,
    },
  ];

  return (
    <div>
      <MainImageFile
        MainImage={MainImage}
        img1="./image/team.png"
        phi="./image/phi.png"
        office="./image/office.png"
      />
    </div>
  );
};
export default MainImageComponent;
