import { useState } from "react";

function Main() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  function Star(props) {
    const favoriteImg = props.isFilled ? "star-filled.png" : "star-empty.png";

    return (
      <img
        onClick={toggleFavorite}
        src={process.env.PUBLIC_URL + `/imgs/${favoriteImg}`}
        className="object-contain h-[25px] w-[25px] cursor-pointer"
        alt=""
      />
    );
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-3 w-[300px] px-10 py-8 shadow-xl rounded-md border-2">
        <img
          src={process.env.PUBLIC_URL + "/imgs/user.png"}
          className="object-contain max-h-[50%]"
          alt=""
        />
        <Star isFilled={contact.isFavorite} />

        <h1 className="text-2xl font-extrabold">John Doe</h1>
        <span>+1 (331) 125-8796</span>
        <small>teachmehowtospankurass@gmail.com</small>
      </div>
    </main>
  );
}

export default Main;
