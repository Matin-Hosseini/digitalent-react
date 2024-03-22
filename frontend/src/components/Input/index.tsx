import "./Custom-input.css";

export default function CustomInput({
  type,
  name,
  label,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: any;
}) {
  return (
    <div className="custom-input">
      <input
        type={type}
        name={name}
        className="custom-input__input"
        value={value}
        onChange={onChange}
        required
      />
      <label className="custom-input__label">{label}</label>
    </div>
  );
}
