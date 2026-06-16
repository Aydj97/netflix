import FrequentlyQ from "../home/FrequentlyQ";
import More from "../home/More";
import TrendingNow from "../home/TrendingNow";
import Finish from "./Finish";
import HeroFinishSingin from "./HeroFinishSingin";

const FinishSignin = () => {
  return (
    <div>
      <HeroFinishSingin/>
      <TrendingNow/>
      <More/>
      <FrequentlyQ/>
      <Finish/>
    </div>
  );
};

export default FinishSignin;
