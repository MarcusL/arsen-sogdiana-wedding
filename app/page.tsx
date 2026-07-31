import Loader from "../components/Loader/Loader";
import Petals from "../components/Petals/Petals";
import Welcome from "../components/Welcome/Welcome";
import Countdown from "../components/Countdown/Countdown";

export default function Home() {
  return (
    <main>
      <Petals />

      <Loader />

      <Welcome />

      <Countdown />
    </main>
  );
}