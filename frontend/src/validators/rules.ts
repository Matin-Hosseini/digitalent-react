export const REQUIRED = "REQUIRED";
export const MIN = "MIN";
export const MAX = "MAX";
export const VALID_EMAIL = "VALID_EMAIL";

export const required = () => ({ value: REQUIRED });

export const min = (length: Number) => ({ value: MIN, length });

export const max = (length: Number) => ({ value: MAX, length });

export const email = () => ({ value: VALID_EMAIL });
