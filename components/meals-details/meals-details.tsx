import { MEALS_ITEMS } from "../data";
import Image from "next/image";
type MealsDetailProps = {
  slugId: number;
};

export default function MealsDetails({ slugId }: MealsDetailProps) {
  const filterMealsDetails = MEALS_ITEMS.find((it) => it.id === slugId);
  return (
    <div className="flex flex-col w-2/3 gap-10">
      <div className="flex  gap-4 mt-12">
        <Image
          src={filterMealsDetails?.src || ""}
          alt="#"
          width={500}
          height={500}
          priority
          className="rounded-lg"
        />
        <div className="flex flex-col gap-8  justify-between">
          <div className="flex flex-col  gap-5">
            <span className="font-semibold text-orange-600 text-2xl">
              {filterMealsDetails?.title}
            </span>
            <span className="font-semibold text-yellow-800">
              {filterMealsDetails?.exp}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {filterMealsDetails?.posterImages?.map((it, index) => (
              <Image
                className="rounded-md"
                key={index}
                src={it}
                alt="#"
                width={165}
                height={165}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="text-lg text-yellow-800">
        With just one bite, experience the{" "}
        <span className="text-orange-600 font-bold">real taste</span> of fast
        food in our{" "}
        <span className="text-orange-600 font-bold">hot and fresh meals</span>!
        Every bite is full of{" "}
        <span className="text-orange-600 font-bold">quality</span>,{" "}
        <span className="text-orange-600 font-bold">speed</span>, and
        <span className="text-orange-600 font-bold"> deliciousness</span>!
      </span>
    </div>
  );
}
