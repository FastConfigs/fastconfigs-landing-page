import HomeHeaderController from "../controllers/headerController";
import MainControllerComponent from "../controllers/mainController";
import "@fontsource/montserrat"
const Home = () => {
  return (
    <div>
      <HomeHeaderController />
      {/* <LinkComponent /> */}
      <MainControllerComponent />
    </div>
  );
};

export default Home;
