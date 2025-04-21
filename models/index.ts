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
