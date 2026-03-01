import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  console.log("Params ID:", id);
  try {
    await connectDB();

    const property = await Property.findById(id);

    if (!property) {
      return new Response("No Property Found", { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};
