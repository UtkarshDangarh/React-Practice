import { useState } from "react";

function CardLayout({ name, position, city, followers, following, posts }) {
  const [btnText, setBtnText] = useState("Follow");

  function handelClick() {
    setBtnText((prev) => (prev === "Follow" ? "Unfollow" : "Follow"));
  }
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex justify-center items-center">
      <div className="flex p-4 justify-center items-center h-full rounded-3xl flex-col gap-2 bg-[#FFFFFF] w-82">
        <img
          src="https://preview.redd.it/fbmk981sxr091.jpg?width=1080&crop=smart&auto=webp&s=c06c8310694eab535500984bfe1536ba2d500543"
          alt="Profile picture"
          className="w-24 h-24 rounded-3xl"
        />
        <div>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <h3>{city}</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <p className="font-bold">{followers}</p>
            <p>Followers</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{following}</p>
            <p>Following</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{posts}</p>
            <p>Posts</p>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <button
            onClick={handelClick}
            className="bg-[#2962FF] w-24 py-2 cursor-pointer rounded-lg font-semibold"
          >
            {btnText}
          </button>
          <button className="border border-[#E0E0E0] font-semibold cursor-pointer w-24 py-2 rounded-lg text-[#333333]">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
