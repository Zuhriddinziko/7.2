import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
import { BiSolidSend } from "react-icons/bi";
import Textarea from "../components/Textarea";
import { useCollektion } from "../hooks/useCollektion";

function Progects() {
  const { id } = useParams();
  const { document } = useCollektion("Progects");
  console.log(document);

  if (!document) {
    return <span className="loading loading-spinner text-info"></span>;
  } else {
    console.log(document);
  }

  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      <div>
        <h1>{document.description}</h1>
        <p className="bg-slate-100 p-5 text-black rounded-md"></p>
      </div>
      <div className=" flex flex-col justify-between">
        {/* <div>{document?.comment.length == 0 ? "No Comment" : ""}</div> */}
        <form className="flex flex-col gap-1">
          <div className="label">
            <span className="label-text text-white"> Message: </span>
          </div>
          <Textarea />
          <button
            type="button"
            className="btn flex text-end justify-center btn-primary btn-block text-black"
          >
            <b> Send </b>
            <BiSolidSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Progects;
