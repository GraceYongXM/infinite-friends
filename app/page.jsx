import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar page="home" />
      <div>
        <Header page="Home" />
        <div className="home">Welcome to the Clerkie Challenge!</div>
      </div>
    </>
  );
};

export default Home;
