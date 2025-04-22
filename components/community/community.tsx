import Cart from "./cart";
import { COMMUNITY_ITEMS } from "../data";
export default function Community() {
  return (
    <div className="  h-full flex flex-col items-center gap-16 mt-16 bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md text-yellow-900 p-2 rounded-lg ">
      <div className="flex flex-col gap-7 items-center">
        <div className="text-3xl">
          One shared passion :{" "}
          <span className="font-bold  text-yellow-800">Food</span>
        </div>
        <span className="text-xl font-bold ">
          Join our community and share your favorite recipes
        </span>
      </div>

      <div className="flex flex-col gap-24">
        {COMMUNITY_ITEMS.map((it, index) => (
          <Cart key={index} title={it.title} image={it.src} />
        ))}
      </div>
    </div>
  );
}
