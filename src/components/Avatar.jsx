function Avatar({ user }) {
  return (
    <div className="max-w-96 flex flex-col items-center">
      <div className="w-[75px] h=[75px] avatar online">
        <img src={user.photoURL} alt="ASZS" />
      </div>
      <div className="w-auto h-30">
        <p>Hello, {user.displayName}</p>
      </div>
    </div>
  );
}

export default Avatar;
