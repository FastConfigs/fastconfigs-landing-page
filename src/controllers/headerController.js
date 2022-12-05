import LogoComponent from "../component/logo.component";
import LinkComponent from "../component/links.component";
import CreativeComponent from "../component/sideSection.component";
import HostionFileComponent from "../component/hosting.component";
// css
import "../css/header.css";
const HomeHeaderController = () => {
  return (
    <div className="main-container">
      <header className="flex-header">
        <LogoComponent />
        <LinkComponent />
      </header>
      <section className="creative-live">
        <CreativeComponent />
      </section>
      <main>
        <HostionFileComponent />
      </main>
    </div>
  );
};

export default HomeHeaderController;
