export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type InfoBoxProps = {
  heading: string;
  backgroundColor: string;
  textColor: string;
  buttonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
  };
  children: string;
};

export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    weekly: number;
    monthly: number;
    nightly: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PropertyCardProps = {
  property: Property;
};

export type PropertyRateInput = Property["rates"];

export type LoadingPageProps = {
  loading: boolean;
};

export type PropertyHeaderImageProps = {
  image: string;
};
