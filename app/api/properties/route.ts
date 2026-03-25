import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {
  connectDB();

  const properties = await Property.find({});

  try {
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};

export const POST = async () => {
  try {
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
