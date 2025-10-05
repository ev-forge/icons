import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../Wrapper";
import {
  faAmbulance,
  faAnglesUp,
  faBaby,
  faCalculator,
  faEarthAmerica,
  faEyeLowVision,
  faFaceKiss,
  faGamepad,
  faHandFist,
  faHome,
  faKeyboard,
  faLaptopFile,
  faMagnet,
  faNetworkWired,
  faOilCan,
  faPaintBrush,
  faQrcode,
  faRadio,
  faRankingStar,
  faRegistered,
  faSailboat,
  faTable,
  faUmbrella,
  faVault,
  faW,
  faWallet,
  faZap,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faImage,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faJs, faXingSquare } from "@fortawesome/free-brands-svg-icons";

const TEST_CASE: IconDefinition[] = [
  faHome,
  faCalculator,
  faAnglesUp,
  faQuestionCircle,
  faWallet,
  faRadio,
  faTable,
  faEyeLowVision,
  faUmbrella,
  faImage,
  faOilCan,
  faPaintBrush,
  faAmbulance,
  faSailboat,
  faFaceKiss,
  faGamepad,
  faHandFist,
  faJs,
  faKeyboard,
  faLaptopFile,
  faZap,
  faXingSquare,
  faCalendarCheck,
  faVault,
  faBaby,
  faNetworkWired,
  faMagnet,
  faQrcode,
  faW,
  faEarthAmerica,
  faRankingStar,
  faRegistered,
];
export const FA = () => {
  return (
    <Wrapper
      title={`Dashboard with @fortawesome/react-fontawesome with ${TEST_CASE.length} icons`}
    >
      {TEST_CASE.map((c, i) => (
        <article
          key={i}
          className="bg-neutral-200 p-4 rounded-lg grid place-items-center"
        >
          <FontAwesomeIcon icon={c} className="text-blue-500 text-[40px]" />
        </article>
      ))}
    </Wrapper>
  );
};

export default FA;
