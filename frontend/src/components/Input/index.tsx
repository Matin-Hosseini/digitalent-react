import { useReducer } from "react";
import validator from "../../validators/validator";
import "./Custom-input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      const { isValid, errorMessage } = validator(
        action.value,
        action.validations
      );

      return {
        ...state,
        value: action.value,
        isValid,
        errorMessage,
      };
    }
  }
};

export default function CustomInput({
  type,
  name,
  label,
  value,
  onChange,
  validations,
}) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: null,
    errorMessage: "",
  });

  return (
    <div className="mb-6">
      <div
        className={`custom-input ${
          mainInput.isValid === true
            ? "valid"
            : mainInput.isValid === false
            ? "error"
            : ""
        }`}
      >
        <input
          type={type}
          name={name}
          className="custom-input__input"
          value={value}
          // value={mainInput.value}
          // onChange={(e) =>
          //   dispatch({ type: "CHANGE", value: e.target.value, validations })
          // }
          onChange={onChange}
          required
        />
        <label className="custom-input__label">{label}</label>
      </div>
      {mainInput.errorMessage && (
        <span className={`text-[var(--red)] h-8 block`}>
          {mainInput.errorMessage}
        </span>
      )}
    </div>
  );
}
