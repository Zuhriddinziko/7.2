function FormInput({ type, label, placeholder, name, value, onChange }) {
  return (
    <label className="form-control w-full mb-2">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default FormInput;
