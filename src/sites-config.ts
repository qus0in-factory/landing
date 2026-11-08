export type SiteCard = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: { src: string; width: number; height: number; alt: string };
  tags?: string[];
  featured?: boolean;
};

export const sites: SiteCard[] = [{
  id: "echo",
  title: "에코익힘책",
  description: "AI & 코딩 익힘책",
  url: "https://echo.qus0in.dev/",
  image: {
    src: "https://files.qus0in.dev/static/3404285fd61e7f77e2eba15ddc7e143df6c2994f62c275dc2614aaef8f2b0fcd/og-echo.jpg",
    width: 1200,
    height: 630,
    alt: "",
  },
}];
