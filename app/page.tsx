import Hero from "@/components/Hero";
import HomeProperty from "@/components/HomeProperty";
import InfoBox from "@/components/InfoBox";
import InfoBoxes from "@/components/InfoBoxes";

const HomePage = () => {
  console.log(process.env.MONGODB_URI);

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
    </>
  );
};

export default HomePage;
