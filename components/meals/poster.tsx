import Link from "next/link";

const Poster = () => {
  return (
    <div className="w-full  bg-yellow-800 bg-opacity-10 backdrop backdrop-blur-md  mt-16 p-2 flex  gap-4 rounded-md">
      <div className="flex flex-col gap-4  w-2/3">
        <div className="text-4xl">
          Deliciouse meals,created{" "}
          <span className="text-yellow-800">by you</span>
        </div>
        <h1 />
        <div className=" text-justify text-yellow-900 font-semibold">
          {`
        About This Section: This message is meant to encourage users to explore
        a fun and interactive food experience. Instead of just ordering
        ready-made meals, the idea is to empower them to become the chef — by
        selecting a recipe and preparing it themselves with guidance.
        Explanation of Each Line: 🧑‍🍳 "Delicious meals, created by you" This
        highlights that the final result — a tasty dish — is made by the user
        themselves. It gives a sense of pride, creativity, and hands-on
        experience. 📋 "Choose your favorite recipe and cook it yourself." This
        line invites users to explore a selection of recipes and take control of
        the cooking process. It’s all about customization and personal taste. 🎉
        "It’s easy and fun!" A reassurance to the user that cooking at home
        isn’t stressful or complicated — it's something enjoyable and accessible
        to everyone, even beginners.
              `}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-orange-900 text-lg">
            choose your favorite recipe and cook it yourself.it is easy and fun!
          </span>
          <Link
            className="bg-orange-600 w-max text-white p-3 rounded-lg"
            href={"/meals/share"}
          >
            share Your Favorite Recipe
          </Link>
        </div>
      </div>

      <video
        autoPlay
        muted
        loop
        src={"/video/foodies.mp4"}
        className=" w-1/3 object-cover rounded-md"
      />
    </div>
  );
};

export default Poster;
