import { useState } from "react";
import MadlibForm from "./MadlibForm";

//Component handling Madlib or Madlibs form display.

function Madlib() {
  const resetState = {
    noun1: "",
    noun2: "",
    adj1: "",
    adj2: "",
    verb: "",
  };
  const [madlibs, setMadlibs] = useState(resetState);

  const [formSubmit, setformSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setformSubmit(true);
  };

  const handleChange = (e) => {
    setMadlibs({
      ...madlibs,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setMadlibs(resetState);
    setformSubmit(false);
  };

  return (
    <div>
      {formSubmit ? (
        <div>
          <h4>
            The {madlibs.adj1} {madlibs.noun1} {madlibs.verb} with the{" "}
            {madlibs.adj1} {madlibs.noun2}.
          </h4>
          <button onClick={resetForm}>Restart</button>
        </div>
      ) : (
        <MadlibForm submitHandle={handleSubmit} changeHandle={handleChange} />
      )}
    </div>
  );
}

export default Madlib;
