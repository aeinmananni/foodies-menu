import { ImageSliderType, CommunityItemType } from "@/models";
import image1 from "@/public/images/image1.jpg";
import image2 from "@/public/images/image2.jpg";
import image3 from "@/public/images/image3.jpg";
import image4 from "@/public/images/image4.jpg";
import image5 from "@/public/images/image5.jpg";
import image6 from "@/public/images/image6.jpg";
import community1 from "@/public/images/community1.png";
import community2 from "@/public/images/dinner_3541570.png";
import community3 from "@/public/images/waiter_2862585.png";
import food2 from "@/public/images/food-cart/food2.jpg";
import food3 from "@/public/images/food-cart/food3.jpg";
import food4 from "@/public/images/food-cart/food4.jpg";
import food5 from "@/public/images/food-cart/food5.jpg";
import food6 from "@/public/images/food-cart/food6.jpg";
import berger1 from "@/public/images/poster-foods/berger1.jpg";
import berger2 from "@/public/images/poster-foods/berger2.jpg";
import berger3 from "@/public/images/poster-foods/berger3.jpg";
import pizz1 from "@/public/images/poster-foods/pizza1.jpg";
import pizz3 from "@/public/images/poster-foods/pizza3.jpg";
import pasta1 from "@/public/images/poster-foods/passta1.webp";
import pasta2 from "@/public/images/poster-foods/pasta2.jpg";
import checken1 from "@/public/images/poster-foods/checken1.webp";
import checken2 from "@/public/images/poster-foods/checken2.jpg";
import checken3 from "@/public/images/poster-foods/checken3.jpg";
import kfc1 from "@/public/images/poster-foods/kfc1.webp";
import kfc2 from "@/public/images/poster-foods/kfc2.webp";
import kfc3 from "@/public/images/poster-foods/kfc3.webp";
import popato1 from "@/public/images/poster-foods/potato2.webp";
import popato2 from "@/public/images/poster-foods/potato4.webp";
import popato3 from "@/public/images/poster-foods/potato3.webp";
export const IMAGE_SLIDER_ITEMS: ImageSliderType[] = [
  { id: 1, image: image1.src, alt: "#1" },
  { id: 2, image: image2.src, alt: "#2" },
  { id: 3, image: image3.src, alt: "#3" },
  { id: 4, image: image4.src, alt: "#4" },
  { id: 5, image: image5.src, alt: "#5" },
  { id: 6, image: image6.src, alt: "#6" },
];

export const COMMUNITY_ITEMS: CommunityItemType[] = [
  { id: 1, title: "Community Perks", src: community1.src },
  { id: 2, title: "Share & dicover recepes", src: community2.src },
  {
    id: 3,
    title: "Find new friends & like-minded pepole",
    src: community3.src,
  },
];

export const MEALS_ITEMS: CommunityItemType[] = [
  {
    id: 1,
    title: "Hot Berger",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: image5.src,
    posterImages: [berger1.src, berger2.src, berger3.src],
  },
  {
    id: 2,
    title: "Pizza",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: food2.src,
    posterImages: [pizz1.src, food2.src, pizz3.src],
  },
  {
    id: 3,
    title: "Passta",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: food3.src,
    posterImages: [pasta1.src, pasta2.src, food3.src],
  },
  {
    id: 4,
    title: "Checken",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: food4.src,
    posterImages: [checken1.src, checken2.src, checken3.src],
  },
  {
    id: 5,
    title: "Kfc",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: food5.src,
    posterImages: [kfc1.src, kfc2.src, kfc3.src],
  },
  {
    id: 6,
    title: "Potato",
    exp: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium
        doloribus dolorem commodi corrupti. Atque magni deserunt et doloremque
        non.`,
    src: food6.src,
    posterImages: [popato1?.src, popato2?.src, popato3?.src],
  },
];
