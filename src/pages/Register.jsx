import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { toast } from "react-toastify";
import ima from ".././assets/image.jpg";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("displayName");
  const email = form.get("email");
  const password = form.get("password");

  // console.log(displayName, email, password);
  return { displayName, email, password };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const hendle = () => {
    return (
      <>
        {password !== confirmPassword
          ? alert(`password not compatible again ${setConfirmPassword("")}`)
          : toast.success(`Welcome ${name}`)}
      </>
    );
  };

  useEffect(() => {
    if (data) {
      if (data.displayName.length > 3 && data.password.length > 3) {
        registerWithEmailAndPassword(
          data.displayName,
          data.email,
          data.password
        );
        toast.isActive("Wow! you active");
      } else {
        toast.error("ma'lumotlarni to'liq kiriting");
      }
    }
  }, [data]);
  return (
    <div
      className="h-screen grid place-items-center w-full "
      style={{
        backgroundImage: `url(${ima})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        method="post"
        className="max-w-96 mx-auto w-full  bg-slate-200 p-6 rounded"
      >
        <h2 className="text-4xl text-center mb-5 font-bold">Register</h2>
        <FormInput
          type="text"
          label="Display Name"
          placeholder="Name"
          name="displayName"
          value={name}
          onChange={handleName}
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="Email"
          name="email"
        />
        <FormInput
          type="Password"
          label="Password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <FormInput
          type="Password"
          label="Repaet password"
          placeholder="password validation"
          name="password2"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <div className="mt-5">
          <button onClick={hendle} className=" btn btn-primary btn-block">
            Submit
          </button>
        </div>
        <div className=" mt-3">
          <h3>
            If you have accountter,
            <Link to={"/login"} className="link-primary text-center">
              Login
            </Link>
          </h3>
        </div>
      </Form>
    </div>
  );
}

export default Register;
