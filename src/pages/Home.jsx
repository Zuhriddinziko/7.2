import Navbar from "../components/Navbar";
import ima from ".././assets/image.jpg";

function Home() {
  const image =
    "https://unsplash.com/photos/aerial-view-of-green-and-brown-land-T9NXKwUEfy4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash";
  return (
    <>
      <div className="flex flex-row   bg-cover">
        <Navbar />
        <div className="w-96"></div>
        <div
          className=" bg-url('https://unsplash.com/photos/aerial-view-of-green-and-brown-land-T9NXKwUEfy4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash') bg-cover w-svw h-svh ml-24"
          style={{
            backgroundImage: `url(${ima})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Home
        </div>
      </div>
    </>
  );
}

export default Home;
