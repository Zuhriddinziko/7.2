import { Link, useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
import ima from ".././assets/image2.jpg";
import { useEffect, useState } from "react";
import { AiFillBackward } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function Users() {
  const { id } = useParams();
  useEffect(() => {
    setSelects(id);
  }, [id]);
  // useEffect(() => {
  //   const { document } = useDocument("users", selects);
  //   return { document };
  // }, [id]);

  const [selects, setSelects] = useState(id);
  const { document } = useDocument("users", selects);
  // console.log(document);
  const [pushs, setPushs] = useState(false);

  const pushImahe = (e) => {
    e.preventDefault();
    const uo = true;
    return setPushs(uo);
  };
  const pushImage = (e) => {
    e.preventDefault();
    const uo = false;
    return setPushs(uo);
  };
  if (!document) {
    return <div className="loading"></div>;
  }
  return (
    <div className="w-[720px] h-[200px]   m-auto flex flex-row items-center justify-between mt-36 ">
      <div>
        <div className="flex flex-row items-center justify-between">
          <Link
            to={"/"}
            className=" mt-60  btn btn-accent hover:text-black bg-black text-white font-bold rounded-lg shadow-lg animate-pulseGlow transition-transform duration-300 hover:scale-105
            "
          >
            <AiFillBackward />{" "}
          </Link>{" "}
          <div
            style={{
              backgroundImage: `url(${ima})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[600px] h-[160px]  m-auto flex flex-col rounded-t-full mt-36 bg-slate-300 justify-self-end shadow-lg animate-pulseGlow transition-transform duration-300"
          >
            <div className="indicator m-auto text-black mt-[86px] -z-1">
              <span
                onClick={pushImahe}
                className={
                  !pushs
                    ? "indicator-item badge  border-none -z-0 cursor-pointer rounded-full"
                    : "-z-10"
                }
              >
                <div
                  className={
                    document.online ? "avatar online" : "avatar offline"
                  }
                >
                  <img
                    className="rounded-full"
                    src={document.photoURL}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </span>
              <div
                onClick={pushImage}
                className={
                  pushs
                    ? "bg-base-300 grid cursor-pointer hover:bg-emerald-500 h-20 w-32 rounded-md place-items-center"
                    : "bg-base-300 grid  h-20 w-32 rounded-md place-items-center"
                }
              >
                <h2>{document.displayName}</h2>
              </div>
            </div>
          </div>
          <Link
            to={"/craete"}
            className=" mt-60  btn btn-accent hover:text-black bg-black text-white font-bold rounded-lg shadow-lg animate-pulseGlow transition-transform duration-300 hover:scale-105
            "
          >
            <FaRegEdit />{" "}
          </Link>
        </div>
        <div className="p-5 w-auto rounded-t-3xl z-50 text-yellow-50 m-auto  bg-slate-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            reiciendis repellat amet ea animi deleniti corrupti odio accusamus
            perferendis ipsa deserunt eaque ab rem nostrum libero beatae, fugiat
            natus optio ducimus! Excepturi officiis, cupiditate beatae
            perferendis delectus nostrum, labore rerum aspernatur reiciendis
            numquam dolorum rem illum tempore soluta. Veritatis, natus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
