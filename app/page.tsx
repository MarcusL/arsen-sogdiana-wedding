import Loader from "../components/Loader/Loader";
import Welcome from "../components/Welcome/Welcome";
import Countdown from "../components/Countdown/Countdown";
import Petals from "../components/Petals/Petals";

export default function Home() {
  return (
    <main>


      <Loader />
      <Petals />

      <Welcome />

    <Countdown />
    </main>
  );
}