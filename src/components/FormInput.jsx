function FormInput({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  errorText,
  className,
}) {
  // console.log(className);
  return (
    <label className="form-control w-full mb-2">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full  text-blue-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${error} ${className}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errorText && (
        <div className="label text-xs">
          <span className="labet-text-alt text-xs text-red-500">
            {errorText}
          </span>
        </div>
      )}
    </label>
  );
}

export default FormInput;
