import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import ima from ".././assets/image.jpg";
import { useSelector } from "react-redux";
import { validateSignupOrLoginData } from "../utils";
import { toast } from "react-toastify";

import { useAuthWithGoogle } from "../hooks/useAuthWithGoogle";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  return { email, password };
};

function Login() {
  const { isPanding } = useSelector((store) => store.user);
  const { googleAuth, ispanding } = useAuthWithGoogle();
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  // console.log(isPanding);
  const { loginWithEmailAndPassword } = useLogin();
  const data = useActionData();
  useEffect(() => {
    if (data) {
      const { valid, errors } = validateSignupOrLoginData(data);

      if (valid) {
        const { email, password } = data;
        loginWithEmailAndPassword(email, password);
        toast.success(`Hello ${name} Congratulations! You are with us.`);
      } else {
        setError((prev) => {
          return { ...prev, ...errors };
        });
        toast.error(error);
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
        className="max-w-96 mx-auto w-full bg-slate-200 p-6 rounded"
      >
        <h2 className="text-4xl text-center mb-5 font-bold">Login</h2>
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
          error={error.password && "input-error"}
          errorText={error.password}
        />
        <div className="mt-5 flex flex-col gap-2">
          {!isPanding && (
            <button className=" btn btn-primary btn-block">Submit</button>
          )}
          {isPanding && (
            <button className=" btn btn-primary btn-block" disabled>
              loading...
            </button>
          )}
          <button
            type="button"
            onClick={googleAuth}
            disabled={isPanding}
            className=" btn btn-secondary btn-block"
          >
            {ispanding ? "Loading..." : "Google"}
          </button>
        </div>
        <div className="mt-3">
          <h3>
            If you don't have accountter,{" "}
            <Link className="link-primary text-center" to={"/register"}>
              Register
            </Link>
          </h3>
        </div>
      </Form>
    </div>
  );
}

export default Login;
