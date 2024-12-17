import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Register() {
  return (
    <div className="h-screen grid place-items-center w-full bg-gradient-to-r from-amber-100 via-lime-300 to-lime-600">
      <form className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Register</h2>
        <FormInput type="text" label="Display Name" placeholder="Name" />
        <FormInput type="email" label="Email" placeholder="Email" />
        <FormInput type="Password" label="Password" placeholder="password" />
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
      </form>
    </div>
  );
}

export default Register;
