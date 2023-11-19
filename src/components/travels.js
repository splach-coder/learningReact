import travels from "../data/travels";
import location from "../svg/location.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="text-white flex justify-center items-center gap-3 py-[20px] text-center shadow-md bg-[#F55A5A]">
      <FontAwesomeIcon className="text-[24px]" icon={faEarthAsia} />
      <span className="text-[14.5px] text-[500]">my travel journal</span>
    </nav>
  );
}

function Card(props) {
  return (
    <div className="border-b pb-5 border-[#f5f5f5] flex gap-5">
      <img
        src={process.env.PUBLIC_URL + "/imgs/" + props.imageUrl}
        className="h-[168px] max-w-[125px] min-w-[125px] object-cover rounded-[5px]"
        alt=""
      />
      <div className="flex flex-col justify-center gap-2">
        <div className="flex gap-4">
          <span className="text-[#2B283A] text-[10.24px] flex uppercase">
            <img className="pe-1" src={location} alt="" />
            {props.location.country}
          </span>
          <a
            href={props.location.googleMaps}
            className="text-[#918E9B] border-[#918E9B] text-[10.24px] border-b cursor-pointer">
            View on Google Maps
          </a>
        </div>

        <div className="title text-[#2B283A] font-bold  text-2xl pb-2">
          {props.title}
        </div>

        <div className="text-[#2B283A] font-bold  text-[10.24px]">
          {props.startDate} - {props.endDate}
        </div>

        <p className="text-[#2B283A] text-[10.24px] leading-[150%]">
          {props.description}
        </p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="flex flex-col justify-center gap-3 px-10 py-12">
      {travels.map((travel) => {
        return <Card {...travel} />;
      })}
    </main>
  );
}

export { Nav, Main };
