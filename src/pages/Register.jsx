import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
import { useRegister } from "../hooks/useRegister";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  return { displayName, email, password };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();
  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(data.displayName, data.email, data.password);
    }
  }, [data]);
  return (
    <div className="h-screen grid place-items-center w-full bg-gradient-to-r from-amber-100 via-lime-300 to-lime-600">
      <Form method="post" className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Register</h2>
        <FormInput
          type="text"
          label="Display Name"
          placeholder="Name"
          name="displayName"
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
        />
        <FormInput
          type="Password"
          label="Repaet password"
          placeholder="password"
        />
        <div className="mt-5">
          <button className=" btn btn-primary btn-block">Submit</button>
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
