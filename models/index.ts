export type ImageSliderType = {
  id: number;
  image: string;
  alt: string;
};

export type CommunityItemType = {
  id: number;
  title: string;
  exp?: string;
  src: string;
  posterImages?: string[];
};


export type ShareFormType = {
  name: string;
  email: string;
  title: string;
  shortSummery: string;
  instructions: string;
};