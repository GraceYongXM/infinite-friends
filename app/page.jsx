import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar page="home"/>
      <Header page="Home"/>
      <div className="home">Welcome to the Clerkie Challenge!</div>
    </>
  )
}

export default Home;