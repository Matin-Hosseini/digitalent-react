import "./Custom-input.css"

export default function CustomInput({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) {
  return (
    <div className="custom-input">
      <input type={type} name={name} className="custom-input__input" required />
      <label className="custom-input__label">{label}</label>
    </div>
  );
}
