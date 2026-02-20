import Hero from "@/components/Hero";
import HomeProperty from "@/components/HomeProperty";
import InfoBox from "@/components/InfoBox";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";

const HomePage = async () => {
  console.log(process.env.MONGODB_URI);
  await connectDB();

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
    </>
  );
};

export default HomePage;
