import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { toast } from "react-toastify";
import ima from ".././assets/image.jpg";
import { validateSignupOrLoginData } from "../utils";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("displayName");
  const email = form.get("email");
  const password = form.get("password");
  const confirmPassword = form.get("password2");

  // console.log(displayName, email, password);
  return { displayName, email, password, confirmPassword };
};

function Register() {
  const [error, setError] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { registerWithEmailAndPassword } = useRegister();
  const singUpData = useActionData();
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
    if (error.displayName !== "") {
      toast.error(error.displayName);
    } else if (error.email !== "") {
      toast.error(error.email);
    } else if (error.password !== "") {
      toast.error(error.password);
    } else if (error.confirmPassword !== "") {
      toast.error(error.displayName);
    } else {
      toast.isActive(`Walecome ${name}`);
    }
  };

  useEffect(() => {
    if (singUpData) {
      const { valid, errors } = validateSignupOrLoginData(singUpData, true);
      if (valid) {
        const { displayName, email, password, confirmPassword } = singUpData;
        registerWithEmailAndPassword(
          displayName,
          email,
          password,
          confirmPassword
        );
        toast.success(`Hello ${name} Congratulations! You are with us.`);
      } else {
        setError((prev) => {
          return { ...prev, ...errors };
        });
        toast.error(errors);
      }
    }
  }, [singUpData]);

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
          error={error.displayName && "input-error"}
          errorText={error.displayName}
          toast={error.displayName}
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="Email"
          name="email"
          error={error.email && "input-error"}
          errorText={error.email}
        />
        <FormInput
          type="Password"
          label="Password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          error={error.password && "input-error"}
          errorText={error.password}
        />
        <FormInput
          type="Password"
          label="Repaet password"
          placeholder="password validation"
          name="password2"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={error.confirmPassword && "input-error"}
          errorText={error.confirmPassword}
        />

        <div className="mt-5 flex flex-col gap-2">
          <button onClick={hendle} className=" btn btn-primary btn-block">
            Submit
          </button>
          <button type="button" className=" btn btn-secondary btn-block">
            Google
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
