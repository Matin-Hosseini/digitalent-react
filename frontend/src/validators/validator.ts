import { MAX, MIN, REQUIRED } from "./rules";

const validator = (value: string, validations: any[]) => {
  let validationResults = [];
  let valueLength = value.trim().length;
  let errorMessage = "";

  for (const validation of validations) {
    if (validation.value === REQUIRED) {
      if (valueLength === 0) {
        validationResults.push(false);
        errorMessage = "این فیلد الزامی می باشد.";
      }
    }
    if (validation.value === MIN) {
      if (valueLength > 0 && valueLength < validation.length) {
        validationResults.push(false);
        errorMessage = "این فیلد باید حداقل " + validation.length + " باشد.";
      }
    }
    if (validation.value === MAX) {
      if (valueLength > validation.length) {
        validationResults.push(false);
        errorMessage = "این فیلد باید حداکثر " + validation.length + " باشد.";
      }
    }
  }

  //   for (const validation of validations) {
  //     switch (validation.value) {
  //       case REQUIRED: {
  //         if (valueLength === 0) {
  //           validationResults.push("required is wrong");
  //           errorMessage = "این فیلد الزامی می باشد.";
  //         }
  //       }
  //       case MIN: {
  //         if (valueLength > 0 && valueLength < validation.length) {
  //           validationResults.push("min is false");
  //           errorMessage = "این فیلد باید حداقل " + validation.length + " باشد.";
  //         }
  //       }
  //       case MAX: {
  //         if (valueLength > validation.length) {
  //           validationResults.push("max is wrong");
  //           errorMessage = "این فیلد باید حداکثر " + validation.length + " باشد.";
  //         }
  //       }
  //     }
  //   }
  
  return validationResults.length > 0
    ? { isValid: false, errorMessage }
    : { isValid: true, errorMessage: "" };
};

export default validator;
