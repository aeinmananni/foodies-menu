type Props = {
  title: string;
  exp: string;
};

export default function Baner({ title, exp }: Props) {
  return (
    <div className="flex flex-col gap-12 w-full ">
      <span className="font-bold text-yellow-900 text-2xl">{title}</span>
      <pre className="text-wrap text-yellow-900 font-semibold">{exp}</pre>
    </div>
  );
}
