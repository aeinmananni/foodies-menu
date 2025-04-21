import Image from "next/image";

type Props = {
  title: string;
  image: string;
};
export default function Cart({ image, title }: Props) {
  return (
    <div className="flex flex-col  items-center gap-12">
      <span className="text-3xl font-semibold">{title}</span>
      <Image src={image} width={200} height={200} alt="#" />
    </div>
  );
}
