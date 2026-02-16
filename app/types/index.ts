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
