import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

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

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    console.log("sessionUser => ", sessionUser);

    if (!sessionUser || !sessionUser.user) {
      return new Response("User id is required", { status: 401 });
    }

    const userId = sessionUser.user.id;

    console.log("userId => ", userId);

    const formData = await request.formData();

    const amenities = formData.getAll("amenities");
    const images = formData.getAll("images");
    // console.log("amenities => ", amenities);
    // console.log("images => ", images);
    // console.log(formData.get("name"));

    const propertyData = {
      type: formData.get("type") as string,
      name: formData.get("name") as string,
      description: formData.get("description") as string,

      location: {
        street: formData.get("location.street") as string,
        city: formData.get("location.city") as string,
        state: formData.get("location.state") as string,
        zipcode: formData.get("location.zipcode") as string,
      },

      beds: Number(formData.get("beds")),
      baths: Number(formData.get("baths")),
      square_feet: Number(formData.get("square_feet")),

      amenities: amenities as string[],

      rates: {
        weekly: Number(formData.get("rates.weekly") || 0),
        monthly: Number(formData.get("rates.monthly") || 0),
        nightly: Number(formData.get("rates.nightly") || 0),
      },

      seller_info: {
        name: formData.get("seller_info.name") as string,
        email: formData.get("seller_info.email") as string,
        phone: formData.get("seller_info.phone") as string,
      },

      images: [], // TEMP

      owner: sessionUser.user.id,
    };

    console.log(propertyData);

    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );

    // return new Response(JSON.stringify({ message: "Success" }), {
    //   status: 200,
    // });
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
