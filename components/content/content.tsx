import Slider from "./slider";
import ChefHat from "@/public/images/chef-hat_8670192.png";
import Image from "next/image";
import Button from "@/UI/button";
export default function Content() {
  return (
    <div className="w-2/3  h-full bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md flex gap-1 p-2 rounded-lg overflow-hidden relative mt-20 ">
      <div className="w-1/2 h-full">
        <Slider />
      </div>
      <div className="flex flex-col gap-4 w-1/2 h-full p-2 justify-between ">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold text-yellow-900">
            NextLevel Food for NextLevel Foodies
          </span>
          <p className="text-lg text-yellow-500">
            Tast & share food from all over the world
          </p>
        </div>
        <Image
          src={ChefHat.src}
          width={50}
          height={50}
          alt="#"
          priority
          className="absolute right-5 top-10 z-20 rotate-45"
        />
        <p className="text-sm text-orange-900 leading-relaxed">
          {`At NextLevel Food, we don’t just cook — we serve stories from around the world on every plate. If you're passionate about bold flavors, discovering diverse culinary cultures, and experiencing something that speaks louder than words, then this is exactly where you belong!
            Every dish you see here is the result of collaboration between chefs from all corners of the globe.`}
        </p>
        <div className="flex items-end justify-between  h-24">
          <span className="text-orange-600 font-semibold text-lg">
            Join the Community
          </span>
          <Button className="bg-orange-600 text-white px-3 py-1 rounded-lg text-lg">
            Explore Meals
          </Button>
        </div>
      </div>
    </div>
  );
}
