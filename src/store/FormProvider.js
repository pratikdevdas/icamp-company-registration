import React, { useState } from "react";
import FormContext from "./form-context";

function FormProvider({ children }) {
  const defaultDataState = {
    Companyname: "",
    Websitename: "",
    Companylocation: "",
    PocName: "",
    ContactNumber: "",
    MailId: "",
    MinS: "",
    MaxS: "",
    MinD: "",
    MaxD: "",
    Mode: "On-site",
    Skills: "",
    Domains: "",
    Perks:"",
    ppo:false
  };
  const defaultValidationState = {
    Companyname: false,
    Websitename: false,
    PocName: true,
    MailId: true,
  };
  const [page, setPage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [formData, setFormData] = useState(defaultDataState);
  const [validation, setValidation] = useState(defaultValidationState);

  const validate = (a) => {return Object.values(a).reduce((sum, next) => sum && next, true)};

  const resetDataState = () => {
    setFormData(defaultDataState);
    setValidation(defaultValidationState);
  };

  const setCurrentPage = (val) => {
    setPage(val);
  };


  const initialValue = {
    formData,
    page,
    numOfPages: 4,
    finalData,
    validation,
    setCurrentPage,
    setFormData,
    resetDataState,
    setFinalData,
    setValidation,
    validate
  };

  return (
    <FormContext.Provider value={initialValue}>{children}</FormContext.Provider>
  );
}

export default FormProvider;
