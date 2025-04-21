import Link from "next/link";
import Image from "next/image";
import animateImage from "@/public/images/hot-dog_6438460.png";
import NavLink from "@/UI/navLink";
export default function Header() {
  return (
    <header className="w-2/3 bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md  flex justify-between items-center p-2 rounded-b-md">
      <div className="flex justify-center items-center gap-3">
        <Image
          width={60}
          height={60}
          src={animateImage.src}
          alt="food_image"
          priority
          className=""
        />
        <Link href={"/"} className="font-bold text-yellow-900">
          NEXTLEVEL FOOD
        </Link>
      </div>
      <nav className="flex items-center gap-6 font-semibold text-yellow-900">
        <NavLink href={"/meals"}>Browse Meals</NavLink>
        <NavLink href={"/community"}>Foodies Community</NavLink>
      </nav>
    </header>
  );
}
