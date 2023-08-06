import { Button } from "../../components/Button.styled";
import { Footer } from "../../components/Footer.styled";
import { Description } from "./components/Description.styled";
import { Map } from "./components/Map.styled";

export function Location() {
  return (
    <>
      <main>
        <Button
          to="/"
          $backwards
          style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}
        >
          Back To Home
        </Button>
        <Map />
        <Description />
      </main>
      <Footer inverted />
    </>
  );
}
