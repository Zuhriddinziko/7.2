import { BiSolidSend } from "react-icons/bi";
import { useFirestore } from "../hooks/useFirestore";
import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Aboute() {
  const { id } = useParams();
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState("");
  const { upDataProject } = useFirestore("Progects");
  const { document } = useDocument("Progects", id);
  console.log(document);
  const hanleSubmit = async (e) => {
    e.preventDefault();
    const massage = {
      id: uuidv4(),
      content,
      craetAd: Timestamp.fromDate(new Date()),
      ower: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid,
      },
    };
    // await upDataProject();
    // {
    //   comment: [...document.comment, massage],
    // },
    // id
    // console.log(massage.content);
    setContent("");
  };
  return (
    <div className="flex flex-row gap-3 mt-8">
      <div className="w-1/2 rounded-md bg-white ">
        <p className=" text-black p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          recusandae, delectus temporibus sunt et corrupti beatae alias laborum
          a. Quia aliquid culpa, ratione hic possimus consectetur voluptas
          commodi laborum saepe velit, molestiae enim perspiciatis omnis atque
          facilis inventore deserunt, dolores deleniti accusamus esse iure quo.
          Iste odit nemo nobis corrupti.
        </p>
      </div>
      <div className="w-1/2">
        <form onSubmit={hanleSubmit} className="flex flex-col  ">
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={user.photoURL}
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{content}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          <textarea
            className="w-[100%] rounded-t-md p-2 text-black"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          <button
            // type="button"
            className="btn hover:bg-amber-500 hover:border-none btn-block rounded-b-md -mt-2 rounded-none btn-primary text-black"
          >
            <b> Send </b>
            <BiSolidSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Aboute;
