import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/map";
const StudCenter = {
  lat: 42.35896752914112, lng:-71.09475985927044
}
export default function Home() {

  return (
    <MapProvider>
      <MapComponent position={StudCenter}></MapComponent>
    </MapProvider>
  );
}