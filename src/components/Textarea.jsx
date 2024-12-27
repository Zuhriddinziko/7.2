function Textarea({ label, name }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text-alt">{label}</span>
      </div>
      <textarea
        className="textarea textarea-bordered text-blue-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 "
        placeholder="Bio"
        name={name}
      ></textarea>
    </label>
  );
}

export default Textarea;
