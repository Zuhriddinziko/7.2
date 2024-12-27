import { Form, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import Textarea from "../components/Textarea";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const ani = makeAnimated();
export async function action({ request }) {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  const dueTo = form.get("dueTo");
  return { name, description, dueTo };
}

const usersOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const progectType = [
  { value: "smm", label: "SMM" },
  { value: "frontent", label: "Frontent" },
  { value: "backend", label: "Backend" },
  { value: "marketing", label: "Marketing" },
];

function Craete() {
  const userActionDate = useActionData();
  const [selectus, setSelectus] = useState(null);
  const [selecttuz, setSelecttuz] = useState(null);

  const userSelectUs = (user) => {
    setSelectus(user);
  };
  const userSelectTuzType = (type) => {
    setSelecttuz(type);
  };
  useEffect(() => {
    if (userActionDate) {
      console.log(userActionDate, selecttuz, selectus);
    }
  }, [userActionDate]);
  return (
    <div className=" p-5 bg-slate-200 rounded-xl mr-20 ml-20 mt-10 placeholder:font-black max-h-full overflow-y-auto border-2 border-yellow-500 animate-borderGlow">
      <h2 className="text-black font-bold text-center text-4xl">
        You have write progect
      </h2>
      <Form method="POST" className="flex flex-col gap-5">
        <FormInput
          label={"Your progect name"}
          type={"text"}
          placeholder={"write name"}
          name={"name"}
        />
        <Textarea label={"Progect description"} name={"description"} />
        <FormInput
          label={"Set dou to"}
          type={"date"}
          className={"placeholder:font-black"}
          name={"dueTo"}
        />

        <label className="form-control w-full mb-2">
          <div className="label">
            <span className="label-text">Progect type</span>
          </div>
          <Select
            onChange={userSelectTuzType}
            options={progectType}
            components={ani}
            isMulti
            className="placeholder:font-black text-blue-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="form-control w-full mb-2">
          <div className="label">
            <span className="label-text">Assing users</span>
          </div>
          <Select
            onChange={userSelectUs}
            options={usersOptions}
            components={ani}
            isMulti
            className="placeholder:font-black text-blue-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <button
          className="btn btn-accent hover:text-black px-6 py-3 bg-black text-white font-bold rounded-lg shadow-lg 
           animate-pulseGlow transition-transform duration-300 hover:scale-105"
        >
          Add progects
        </button>
      </Form>
    </div>
  );
}

export default Craete;
