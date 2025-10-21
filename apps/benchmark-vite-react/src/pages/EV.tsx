import {
  svgAmbulanceSolid,
  svgAnglesUpSolid,
  svgBabySolid,
  svgCalculatorSolid,
  svgCalendarCheckRegular,
  svgEarthAmericaSolid,
  svgEyeLowVisionSolid,
  svgFaceKissSolid,
  svgGamepadSolid,
  svgHandFistSolid,
  svgHomeSolid,
  svgImageRegular,
  svgJsBrands,
  svgKeyboardSolid,
  svgLaptopFileSolid,
  svgMagnetSolid,
  svgNetworkWiredSolid,
  svgOilCanSolid,
  svgPaintBrushSolid,
  svgQrcodeSolid,
  svgQuestionCircleRegular,
  svgRadioSolid,
  svgRankingStarSolid,
  svgRegisteredRegular,
  svgSailboatSolid,
  svgTableSolid,
  svgUmbrellaSolid,
  svgVaultSolid,
  svgWalletSolid,
  svgWSolid,
  svgXingSquareBrands,
  svgZapSolid,
} from "@ev-forge/icons";
import Wrapper from "../Wrapper";

const TEST_CASE = [
  svgHomeSolid,
  svgCalculatorSolid,
  svgAnglesUpSolid,
  svgQuestionCircleRegular,
  svgWalletSolid,
  svgRadioSolid,
  svgTableSolid,
  svgEyeLowVisionSolid,
  svgUmbrellaSolid,
  svgImageRegular,
  svgOilCanSolid,
  svgPaintBrushSolid,
  svgAmbulanceSolid,
  svgSailboatSolid,
  svgFaceKissSolid,
  svgGamepadSolid,
  svgHandFistSolid,
  svgJsBrands,
  svgKeyboardSolid,
  svgLaptopFileSolid,
  svgZapSolid,
  svgXingSquareBrands,
  svgCalendarCheckRegular,
  svgVaultSolid,
  svgBabySolid,
  svgNetworkWiredSolid,
  svgMagnetSolid,
  svgQrcodeSolid,
  svgWSolid,
  svgEarthAmericaSolid,
  svgRankingStarSolid,
  svgRegisteredRegular,
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
