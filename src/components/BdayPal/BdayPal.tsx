import { useState } from "react";
import "./BdayPal.css";

const BdayPal = () => {
  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>
            Enter your birthdate and we will tell you if your birthdate is a
            palindrome
          </h1>
        </header>
        <section className="instruction"></section>
        <label>
          <section className="label">Enter your Birth Date</section>
          <input type="text" />
        </label>

        <button onClick={() => {}}>CHECK</button>
      </div>
    </>
  );
};
export default BdayPal;
