import logo from "../svg/face.svg";
import memesData from "../data/memeData";
import { useState, useEffect } from "react";

function Nav() {
  return (
    <nav className="py-6 px-8 shadow-md text-white bg-gradient-to-r from-[#672280] to-[#A626D3] flex gap-2 items-center">
      <img src={logo} alt="" className="cursor-pointer" />
      <div className=" font-bold text-[21px]">Meme Generator</div>
      <div className="ms-auto text-[12px] font-inter">
        React Course - Project 3
      </div>
    </nav>
  );
}

function Form() {
  const [allMememsData, setAllMememsData] = useState([]);

  const [meme, setUrl] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  useEffect(
    function () {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setAllMememsData(data.data.memes)); //
    },
    [allMememsData]
  ); //

  const style = {
    textShadow: "2px 2px #FF0000",
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setUrl((oldMeme) => {
      return {
        ...oldMeme,
        [name]: value,
      };
    });
  }

  function clickMe() {
    const memes = allMememsData;
    const length = memes.length;
    const random = randomNumber(0, length - 1);

    const currentMeme = memes[random];
    const currentUrl = currentMeme.url;

    setUrl((oldMeme) => {
      return {
        ...oldMeme,
        randomImage: currentUrl,
      };
    });
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="flex flex-wrap justify-between gap-3">
      <input
        type="text"
        className="input flex-1 border-2 p-2 text-[#0D0D0D] rounded-md text-[12px] "
        name="topText"
        placeholder="top text"
        value={meme.topText}
        onChange={handleChange}
      />

      <input
        type="text"
        className="input flex-1 max-w-[50%] border-2 p-2 text-[#0D0D0D] rounded-md text-[12px] "
        name="bottomText"
        placeholder="bottom text"
        value={meme.bottomText}
        onChange={handleChange}
      />

      <input
        type="button"
        className="input flex-1 px-2 py-3 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white rounded-md cursor-pointer font-bold text-[16px]"
        name=""
        value="Get a new image meme"
        onClick={clickMe}
      />

      <div className="border-2 max-h-96 w-[100%] mt-16 flex justify-center relative">
        <img
          src={meme.randomImage}
          className="h-100 w-100 object-contain"
          alt=""
        />
        <h1
          style={style}
          className="absolute top-2  text-5xl font-extrabold drop-shadow-2xl">
          {meme.topText}
        </h1>
        <h1 style={style} className="absolute bottom-2 text-5xl font-extrabold">
          {meme.bottomText}
        </h1>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="p-12">
      <Form />
    </main>
  );
}

export { Nav, Main };
