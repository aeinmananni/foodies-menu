import { Form } from "./components";

export default function Share() {
  return (
    <div className="w-2/3 h-full bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md mt-5 p-2 rounded-lg animate-fade-up flex flex-col gap-7">
      <div className="flex flex-col gap-2 text-yellow-800">
        <div className=" text-3xl font-bold">
          Share your <span className="text-orange-600">favorite meal</span>
        </div>
        <span className="font-semibold text-lg">
          Or any other meal you feel needs sharing!
        </span>
      </div>

      <Form />
    </div>
  );
}
