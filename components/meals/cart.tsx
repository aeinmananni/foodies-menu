import Image from "next/image";
import Link from "next/link";

type Props = {
  id?: number;
  title: string;
  exp?: string;
  src: string;
};

export default function Cart({ exp, id, title, src }: Props) {
  return (
    <div className=" flex flex-col items-center gap-2 bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md rounded-md">
      <Image
        src={src}
        alt="This is food Image"
        width={400}
        height={400}
        priority
        className="object-cover rounded-md"
      />
      <div className="font-serif text-orange-600 text-lg">{title}</div>
      <span className="p-1 text-yellow-900 font-semibold ">{exp}</span>
      <div className="flex justify-end w-full p-1">
        <Link
          className="bg-orange-600 w-max text-white p-2 rounded-sm"
          href={`/meals/${id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
