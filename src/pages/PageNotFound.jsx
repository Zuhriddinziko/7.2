import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function PageNotFound() {
  const error = useRouteError();
  //   console.log(error);
  if (error && error.status == 404) {
    return (
      <div className="flex flex-col gap-5 place-items-center bg-slate-50 w-96 h-72 p-9 text-center m-auto rounded-md mt-14">
        <h1 className="text-black text-3xl">Page Not Found ???</h1>
        <b className="text-black text-3xl">You are making a mistake.</b>
        <Link to={"/"} className="btn btn-secondary">
          to go back
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 place-items-center bg-slate-50 w-96 h-72 p-9 text-center m-auto rounded-md mt-14">
      <h1 className="text-black text-3xl">Samething Error ???</h1>
      <b className="text-black text-3xl">You are making a mistake.</b>
      <Link to={"/"} className="btn btn-secondary">
        to go back
      </Link>
    </div>
  );
}

export default PageNotFound;
