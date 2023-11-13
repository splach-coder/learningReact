import image from "../imgs/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareTwitter,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Card() {
  return (
    <div className="w-[317px] h-[780px] drop-shadow-md">
      <img
        src={image}
        alt="image"
        className="w-[317px] h-[217px] object-cover rounded-tl-[10px] rounded-tr-[10px]"
      />
      <div className="h-[399px] flex flex-col items-center justify-between bg-[#f5f5f5] dark:bg-[#1A1B21] pt-[20px] pb-[40px] px-[35px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[#2B283A] text-[25px] font-bold dark:text-white">
            Kobe Braynt
          </h1>
          <p className="text-[#F47D27] text-[12.8px] dark:text-[#F3BF99]">
            Frontend Devloper
          </p>
          <small className="text-[#4A4E74] text-[10.24px] dark:text-[#f5f5f5]">
            laurasmith.website
          </small>
        </div>
        <div className="buttons flex justify-center items-center gap-5 text-base font-medium line-height-4">
          <button className="w-[115px] flex justify-center items-center gap-[8px] bg-white text-black rounded-[6px] py-[9px] ps-[11px] pe-[13px] border-[1px] border-[#D1D5DB]">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
          </button>
          <button className="w-[115px] flex justify-center items-center gap-[8px] rounded-[6px] bg-[#297FE5] text-white  py-[9px] ps-[11px] pe-[13px]">
            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
          </button>
        </div>
        <div className="">
          <h2 className="text-[#2B283A] text-[16px] font-bold leading-[24px] dark:text-[#F5F5F5]">
            About
          </h2>
          <p className="text-[#4A4E74] text-[10.24px] font-normal leading-[16px] dark:text-[#DCDCDC]">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="">
          <h2 className="text-[#2B283A] text-[16px] font-bold leading-[24px] dark:text-[#F5F5F5]">
            Interests
          </h2>
          <p className="text-[#4A4E74] text-[10.24px] font-normal leading-[16px] dark:text-[#DCDCDC]">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <footer className="bg-[#D5D4D8] dark:bg-[#161619] rounded-br-[10px] rounded-bl-[10px] h-[67px] flex justify-center items-center gap-[15px]">
        <FontAwesomeIcon
          className="cursor-pointer w-[25px] h-[25px] text-[#918E9B]"
          icon={faSquareTwitter}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-[25px] h-[25px] text-[#918E9B] "
          icon={faSquareFacebook}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-[25px] h-[25px] text-[#918E9B] "
          icon={faSquareInstagram}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-[25px] h-[25px] text-[#918E9B] "
          icon={faSquareGithub}
        />
      </footer>
    </div>
  );
}

export default Card;
