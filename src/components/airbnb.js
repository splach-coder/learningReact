import logo from "../svg/airbnb.svg";
import ellipse from "../svg/Ellipse.svg";
import star from "../svg/Star.svg";
import cards from "../data/airbnb";
import image22 from "../imgs/image 22.png";
import image23 from "../imgs/image 23.png";
import image24 from "../imgs/image 24.png";
import image25 from "../imgs/image 25.png";
import image26 from "../imgs/image 26.png";
import image27 from "../imgs/image 27.png";
import image28 from "../imgs/image 28.png";
import image29 from "../imgs/image 29.png";
import image30 from "../imgs/image 30.png";

function Nav() {
  return (
    <nav className="py-6 px-8 shadow-md">
      <img src={logo} alt="" className="cursor-pointer" />
    </nav>
  );
}

function Images() {
  return (
    <div className="w-100 flex justify-center items-center gap-2">
      <div className="flex flex-col gap-3">
        <img src={image28} alt="" className="rounded-[9px] cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3">
        <img src={image30} alt="" className="rounded-[9px] cursor-pointer" />
        <img src={image26} alt="" className="rounded-[9px] cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3 pt-20">
        <img src={image27} alt="" className="rounded-[9px] cursor-pointer" />
        <img src={image29} alt="" className="rounded-[9px] cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3">
        <img src={image22} alt="" className="rounded-[9px] cursor-pointer" />
        <img src={image23} alt="" className="rounded-[9px] cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3 pt-16">
        <img src={image25} alt="" className="rounded-[9px] cursor-pointer" />
        <img src={image24} alt="" className="rounded-[9px] cursor-pointer" />
      </div>
    </div>
  );
}

function Card(props) {
  let badgeText;
  badgeText =
    props.openSpots === 0
      ? "sold out"
      : props.location.toLowerCase() === "online"
      ? "online"
      : props.location;
  return (
    <div className="min-w-[176px] rounded-[9px] overflow-hidden flex flex-col gap-3 relative">
      <div className="w-100 h-[235px]">
        <img src={process.env.PUBLIC_URL + "/imgs/" + props.coverImg} alt="" />
      </div>
      <div className="h-[58px] flex flex-col gap-1">
        <div className="flex items-center gap-1 text-xs font-[300] text-[#918E9B]">
          <img src={star} alt="" />
          <strong className="text-[#222]">{props.stats.rating}</strong>
          <span>({props.stats.reviewCount})</span>
          <img src={ellipse} alt="" />
          <span>{props.location}</span>
        </div>
        <p className="text-xs text-[#222]">{props.quote}</p>
        <div className="text-xs text-[#222]">
          <strong className="font-[600]">From ${props.price}</strong>
          <small className="ms-[2px]">/ person</small>
        </div>
      </div>
      <div
        className={`card--tag absolute top-2 left-2 bg-white uppercase w-[61px] py-[5px] text-center text-[#222] text-[10.24px] font-normal fonr-[110%] cursor-pointer rounded-[2px]`}>
        {badgeText}
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="flex flex-col gap-6 pb-12">
      <Images />
      <div className="flex flex-col gap-1 ps-[36px]">
        <h1 className="text-black text-[36px] font-bold">Online Experiences</h1>
        <p className="text-[16px] text-[#222] leading-[110%] font-[300] w-[320px]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <div className="flex gap-6 ps-[36px]">
        {cards.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}

export { Nav, Main };
