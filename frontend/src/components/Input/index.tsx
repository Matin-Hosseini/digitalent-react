import { InputHTMLAttributes } from "react";
// import "./Custom-input.css";
import { FieldError } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  name?: string;
  label: string;
  hasError?: FieldError;
  errorMessage?: string;
};

export default function Input({
  type,
  name,
  label,
  hasError,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <div className="mb-6">
      <div className={`custom-input`}>
        <input
          type={type}
          name={name}
          className="custom-input__input"
          {...rest}
          required
        />
        <label className="custom-input__label">{label}</label>
      </div>
      {/* {hasError && (
        <span className={`text-[var(--red)] h-8 block`}>{errorMessage}</span>
      )} */}
    </div>
  );
}
