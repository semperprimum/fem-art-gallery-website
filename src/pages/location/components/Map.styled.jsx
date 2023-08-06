import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import iconLocation from "../../../assets/icon-location.svg";
import "leaflet/dist/leaflet.css";

const StyledMapContainer = styled(MapContainer)`
  height: 34.375rem;
  max-width: 100vw;
  @media only screen and (min-width: 37.5rem) {
    height: 37.5rem;
  }
`;

export function Map() {
  const position = [41.48038434678184, -71.31099362748895];
  return (
    <StyledMapContainer
      zoomControl={false}
      center={position}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <Marker
        position={[41.4814, -71.31099362748895]}
        icon={L.icon({ iconUrl: iconLocation, iconSize: 66 })}
      />
    </StyledMapContainer>
  );
}
