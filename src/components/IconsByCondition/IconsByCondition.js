import CloudQueueTwoToneIcon from "@mui/icons-material/CloudQueueTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const IconsByCondition = ({ icon }) => {
  switch (icon) {
    case "Clouds":
      return <CloudQueueTwoToneIcon />;
    case "Clear":
      return <WbSunnyTwoToneIcon />;
    case "Snow":
      return <AcUnitIcon />;

    default:
      return null;
  }
};

export default IconsByCondition;
