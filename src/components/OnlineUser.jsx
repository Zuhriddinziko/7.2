import { useCollektion } from "../hooks/useCollektion";

function OnlineUser() {
  const { document } = useCollektion("users");

  return (
    <ul className="w-[400px] h-screen bg-stone-400 p-10 flex flex-col gap-2 shadow-lg shadow-slate-600">
      {document &&
        document.map((doc) => {
          return (
            <li
              key={doc.id}
              className="w-[280px] h-[60px] text-black flex items-center rounded-lg p-2  bg-slate-50  shadow-slate-600 shadow-lg "
            >
              <div className="flex items-center gap-3">
                <div className="avatar online">
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
            </li>
          );
        })}
    </ul>
  );
}

export default OnlineUser;
