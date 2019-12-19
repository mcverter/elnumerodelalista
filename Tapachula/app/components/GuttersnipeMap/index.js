import GuttersnipeMap from './GuttersnipeMap';
import {shareables, center, zoom} from '../../../../../src/Components/TijuanaMap/constants';

const SpecificMap = () => (
  <GuttersnipeMap shareable={shareables} center={center} zoom={zoom}/>
)

export default SpecificMap;
