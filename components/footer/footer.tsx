import Baner from "./baner";
import chef from "@/public/images/food_15641222.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="relative flex flex-col gap-12 justify-center items-center w-2/3  p-2  h-full bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md  rounded-lg overflow-hidden ">
      <Image
        src={chef.src}
        width={50}
        height={50}
        alt="#"
        className="absolute right-3 top-3"
      />
      <Baner
        title="How it works"
        exp={`Explore the delicious menu
Choose from a variety of fresh, healthy, and flavorful dishes. Our carefully crafted menu has something for every taste.

Place your order
Easily add your favorite meals to the cart, enter your address, and complete the payment. It’s quick, simple, and secure.

Prepared with love
Our professional chefs cook every meal fresh using the finest ingredients. We care about quality because your satisfaction matters to us.

Fast & hot delivery
Your order will be delivered in the shortest time possible – hot, aromatic, and ready to enjoy!
            
`}
      />
      <Baner
        title="Why Next Level Food?"
        exp={`Because good food deserves to be extraordinary.
At Next Foodies, we’re not just serving meals — we’re delivering an experience. From the freshest ingredients to the final touch on your plate, every detail is crafted with care.

Here's what sets us apart:
🍽️ Premium Quality
We use only high-quality, fresh ingredients to ensure every bite is memorable.

🧑‍🍳 Chef-Curated Recipes
Our meals are designed by passionate chefs who know how to balance flavor, nutrition, and creativity.

⚡ Fast & Reliable Delivery
Enjoy your food hot and fresh — every time.

💡 Next-Level Experience
From easy ordering to elegant presentation, we take your food journey to the next level.`}
      />
    </div>
  );
}
