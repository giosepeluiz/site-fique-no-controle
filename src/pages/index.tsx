import Head from "next/head";
import ChannelStatus from "../components/ChannelStatus";
import Footer from "../components/Footer";
import LastVideos from "../components/LastVideos";
import Main from "../components/Main";

const Home = () => (
  <>
    <Head>
      <title>Fique no Controle</title>
    </Head>
    <Main />
    <ChannelStatus />
    <LastVideos />
    <Footer />
  </>
);

export default Home;
