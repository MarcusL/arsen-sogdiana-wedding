import Loader from "../components/Loader/Loader";
import Petals from "../components/Petals/Petals";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import Welcome from "../components/Welcome/Welcome";
import Countdown from "../components/Countdown/Countdown";


export default function Home() {

  return (

    <SmoothScroll>

      <main>

        <Loader />

        <Petals />

        <Welcome />

        <Countdown />

      </main>

    </SmoothScroll>

  );

}
