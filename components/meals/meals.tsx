import Poster from "./poster";
import Cart from "./cart";
import { MEALS_ITEMS } from "../data";
export default function Meals() {
  return (
    <div className="w-2/3 flex flex-col items-center gap-8 py-2 animate-fade-up">
      <Poster />
      <div className="grid grid-cols-3 gap-8">
        {MEALS_ITEMS.map((it, index) => (
          <Cart
            key={index}
            id={it.id}
            title={it.title}
            exp={it.exp}
            src={it.src}
          />
        ))}
      </div>
    </div>
  );
}
