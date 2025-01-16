function Textarea({ label, name, error, className, errorText }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text-alt">{label}</span>
      </div>
      <textarea
        className={`textarea textarea-bordered text-blue-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error} ${className} `}
        placeholder="Bio"
        name={name}
      >
        {errorText && (
          <div className="label text-xs">
            <span className="labet-text-alt text-xs text-red-500">
              {errorText}
            </span>
          </div>
        )}
      </textarea>
    </label>
  );
}

export default Textarea;
