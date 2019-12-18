import foodIcon from './comida.png';
import medicineIcon from './medicos.png';
import shelterFamilasIcon from './familias.jpg';
import shelterLGBTQIcon from './lgbtq.jpg';
import shelterSolterosIcon from './solteros.jpg';
import shelterMujeresIcon from './mujeres.jpg';
import shelterMenoresIcon from './menores.jpg';
import govermentIcon from './government.png';
import phoneIcon from './phone.png';
import ngoIcon from './ngo.png';
import {Icon} from 'leaflet';

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

const icons = {
  "Comida" : foodIcon,
  "Servicios Medicos": medicineIcon,
  "Albergue: Familias": shelterFamilasIcon,
  "Albergue: LGBTQ": shelterLGBTQIcon,
  "Albergue: Solteros": shelterSolterosIcon,
  "Albergue: Mujeres": shelterMujeresIcon,
  "Albergue: Menores de Edad": shelterMenoresIcon,
  "phone": phoneIcon,
  "Oficial": govermentIcon,
  "ONG": ngoIcon
};

const leafletIcons = objectMap(icons, i=> new Icon({iconUrl: i}));

export default leafletIcons;