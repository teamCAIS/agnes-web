import React from "react";

const ErrorContext = React.createContext({
  error: "",
  setError: (msg) => msg,
});

export default ErrorContext;
