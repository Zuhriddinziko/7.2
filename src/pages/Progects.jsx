import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
import { BiSolidSend } from "react-icons/bi";
import Textarea from "../components/Textarea";

function Progects() {
  const { id } = useParams();
  const { document } = useDocument("users", id);

  if (!document) {
    return <span className="loading loading-spinner text-info"></span>;
  }

  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      <div>
        <p className="bg-slate-100 p-5 text-black rounded-md">
          {id}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum soluta
          vel accusamus nam quisquam temporibus velit ea quos esse harum dicta
          exercitationem, nihil quod incidunt quae, dolorum accusantium itaque?
          Pariatur consequuntur excepturi, obcaecati unde sapiente rem in
          laudantium necessitatibus vero nemo sunt! Necessitatibus laudantium
          quam velit deleniti, dicta id facere!
        </p>
      </div>
      <div className=" flex flex-col justify-between">
        <div>{document?.comment.length == 0 ? "No Comment" : ""}</div>
        <form>
          <div className="label">
            <span className="label-text"> Message: </span>
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
