import {
  brandsJs,
  regularCalendarCheck,
  solidAmbulance,
  solidAngleDoubleUp,
  solidBaby,
  solidCalculator,
  solidEarth,
  solidEyeLowVision,
  solidFaceKiss,
  solidGamepad,
  solidHome,
  regularImage,
  solidKeyboard,
  solidMagnet,
  solidNetworkWired,
  solidOilCan,
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
  regularCircleQuestion,
  solidPaintbrush,
} from "@ev-forge/icons";
import Wrapper from "../Wrapper";

const TEST_CASE = [
  solidHome,
  solidCalculator,
  solidAngleDoubleUp,
  regularCircleQuestion,
  solidWallet,
  solidRadio,
  solidTable,
  solidEyeLowVision,
  solidUmbrella,
  regularImage,
  solidOilCan,
  solidPaintbrush,
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
