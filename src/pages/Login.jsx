import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Login() {
  return (
    <div className="h-screen grid place-items-center w-full bg-gradient-to-r from-lime-600 via-amber-300 to-lime-600 ">
      <form className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Login</h2>
        <FormInput type="email" label="Email" placeholder="Email" />
        <FormInput type="Password" label="Password" placeholder="password" />
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
      </form>
    </div>
  );
}

export default Login;
