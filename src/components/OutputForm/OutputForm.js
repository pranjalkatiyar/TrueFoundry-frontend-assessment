import React, { useEffect, useRef, useState } from "react";
import FormRender from "./FormRender";
import ErrorSection from "../ErrorSection/ErrorSection";
import FormSubmitModal from "./FormSubmitModal";
import BlankForm from "./BlankForm";
import { Switch } from "@mui/material";

const OutputForm = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isError, setIsError] = useState(false);
  const [shouldOpenFormSubmitModal, setShouldOpenFormSubmitModal] =
    useState(false);
  const [formSubmitedData, setFormSubmitedData] = useState({});
  const [isJsonEmpty, setIsJsonEmpty] = useState(false);
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const formRef = useRef(null);


  useEffect(() => {
    handleJsonSchema();
  }, [jsonSchema]);


  const reRender = () => {
    setToggle((toggle) => !toggle);
  };


  const handleJsonSchema = () => {
    if (jsonSchema !== "") {
      try {
        const parsed = JSON.parse(jsonSchema);
        if (typeof parsed === "object") setParsedSchema(parsed);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
      setIsJsonEmpty(false);
    } else {
      setIsJsonEmpty(true);
      setIsError(false);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    const formData = new FormData(formRef.current);
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    setFormSubmitedData(obj);
    setShouldOpenFormSubmitModal(true);
  };

  
  return (
    <div className="h-screen p-4 flex flex-col gap-6 overflow-hidden bg-gray-100">
      <div className="">
        <h1 className="text-2xl text-blue-900 font-semibold">Form Output</h1>
      </div>
      <div className="overflow-hidden grow flex flex-col">
        {isError ? (
          <ErrorSection />
        ) : (
          <>
            {isJsonEmpty ? (
              <BlankForm />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid gap-4 p-3 overflow-auto h-full rounded-lg bg-white custom-scrollbar"
              >
                <FormRender
                  data={parsedSchema}
                  formRef={formRef}
                  parentLabel=""
                  reRender={reRender}
                  showAdvancedFields={showAdvancedFields}
                />
                <div className="flex gap-3 items-center">
                  <Switch
                    value={showAdvancedFields}
                    onClick={() => {
                      setShowAdvancedFields(!showAdvancedFields);
                    }}
                  />
                  Show Advanced Fields
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="rounded-lg text-white p-2 bg-blue-500 shadow text-lg text-center w-32"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
      <FormSubmitModal
        open={shouldOpenFormSubmitModal}
        setOpen={setShouldOpenFormSubmitModal}
        formSubmitedData={formSubmitedData}
      />
    </div>
  );
};

export default OutputForm;
