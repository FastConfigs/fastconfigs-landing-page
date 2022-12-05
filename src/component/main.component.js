import MainFileAbout from "../files/main.file";
const MainController = ({ about_us, description }) => {
  const about = [
    {
      about_us,
      description,
    },
  ];
  return (
    <div>
      <MainFileAbout
        about={about}
        description="We make your deployment life easy"
        about_us="About"
      />
    </div>
  );
};

export default MainController;
