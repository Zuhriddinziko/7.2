import { useCollektion } from "../hooks/useCollektion";

function OnlineUser() {
  useCollektion("users");
  return (
    <div className=" h-screen bg-orange-900 w-[400px] p-10">
      OnlineUser Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
      temporibus?
    </div>
  );
}

export default OnlineUser;
