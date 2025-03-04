import { Link } from "react-router-dom";
import { useCollektion } from "../hooks/useCollektion";
// import { olish } from "../pages/Progects";
// const { document } = useCollektion("users");

function OnlineUser() {
  const { document } = useCollektion("users");

  // console.log(res);
  return (
    <div className="w-[400px] h-screen bg-stone-400  z-10 p-10  shadow-lg shadow-slate-600 tip">
      <div className="bg-stone-300 w-[320px]  p-3 rounded-md flex flex-col gap-2 max-h-full overflow-y-auto">
        {document &&
          document.map((doc) => {
            return (
              <Link
                to={`/users/${doc.id}`}
                key={doc.id}
                className="cursor-pointer w-[280px] h-[60px] text-black flex items-center rounded-lg p-2  hover:text-white bg-green-400 shadow-yellow-500  shadow-lg  hover:bg-red-700  font-bold 
                animate-pulseGlow transition-all duration-300 hover:scale-105 "
              >
                <div className="flex items-center gap-3">
                  <div
                    className={doc.online ? "avatar online" : "avatar offline"}
                  >
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={doc.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{doc.displayName}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default OnlineUser;
