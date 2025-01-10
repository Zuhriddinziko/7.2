import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";

function Aboute() {
  const { id } = useParams();
  const { document } = useDocument("users", id);
  if (!document) {
    return <div className="loading"></div>;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p className="bg-slate-100 p-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum soluta
          vel accusamus nam quisquam temporibus velit ea quos esse harum dicta
          exercitationem, nihil quod incidunt quae, dolorum accusantium itaque?
          Pariatur consequuntur excepturi, obcaecati unde sapiente rem in
          laudantium necessitatibus vero nemo sunt! Necessitatibus laudantium
          quam velit deleniti, dicta id facere!
        </p>
      </div>
      <div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
}

export default Aboute;
