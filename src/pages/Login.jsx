import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  return { email, password };
};

function Login() {
  const { loginWithEmailAndPassword } = useLogin();
  const data = useActionData();
  useEffect(() => {
    if (data) {
      if (data.email.length > 3 && data.password.length > 3) {
        loginWithEmailAndPassword(data.email, data.password);
      } else {
        alert("ma'lumotlarni to'liq kiriting");
      }
    }
  }, [data]);
  return (
    <div className="h-screen grid place-items-center w-full bg-gradient-to-r from-lime-600 via-amber-300 to-lime-600 ">
      <Form method="post" className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Login</h2>
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
        />
        <div className="mt-5">
          <button className=" btn btn-primary btn-block">Submit</button>
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
