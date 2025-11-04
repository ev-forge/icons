import {
  brandsJs,
  regularCalendarCheck,
  regularQuestionCircle,
  solidAmbulance,
  solidAngleDoubleUp,
  solidBaby,
  solidCalculator,
  solidEarth,
  solidLowVision,
  solidFaceKiss,
  solidGamepad,
  solidHouse,
  regularImage,
  solidKeyboard,
  solidMagnet,
  solidNetworkWired,
  solidOilCan,
  solidPaintBrush,
  solidBolt,
  solidQrcode,
  solidRadio,
  solidRankingStar,
  solidSailboat,
  solidTable,
  solidUmbrella,
  solidVault,
  solidW,
  solidWallet,
  brandsSquareXing,
  solidFistRaised,
  solidLaptopFile,
  solidRegistered,
} from "@ev-forge/icons";
import Wrapper from "../Wrapper";

const TEST_CASE = [
  solidHouse,
  solidCalculator,
  solidAngleDoubleUp,
  regularQuestionCircle,
  solidWallet,
  solidRadio,
  solidTable,
  solidLowVision,
  solidUmbrella,
  regularImage,
  solidOilCan,
  solidPaintBrush,
  solidAmbulance,
  solidSailboat,
  solidFaceKiss,
  solidGamepad,
  solidFistRaised,
  brandsJs,
  solidKeyboard,
  solidLaptopFile,
  solidBolt,
  brandsSquareXing,
  regularCalendarCheck,
  solidVault,
  solidBaby,
  solidNetworkWired,
  solidMagnet,
  solidQrcode,
  solidW,
  solidEarth,
  solidRankingStar,
  solidRegistered,
];
const EV = () => {
  return (
    <Wrapper
      title={`Dashboard with @ev-forge/icons with ${TEST_CASE.length} icons`}
    >
      {TEST_CASE.map((c, i) => (
        <article
          key={i}
          className="bg-neutral-200 p-4 rounded-lg grid place-items-center"
        >
          <ev-icon svg={c} className="text-blue-500 w-10 h-10" />
        </article>
      ))}
    </Wrapper>
  );
};

export default EV;
