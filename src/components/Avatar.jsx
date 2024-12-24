function Avatar({ user }) {
  return (
    <div className="max-w-96 flex flex-col h-30">
      <div className="w-[75px] h=[75px]">
        <img src={user.photoURL} alt="avetar" />
      </div>
      <div className="w-auto h-30">
        <p>Hello, {user.displayName}</p>
      </div>
    </div>
  );
}

export default Avatar;
