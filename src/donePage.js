import React from "react";
import { SVGCheckMark } from "./checkmark";
export default function DonePage ({state}) {
  console.log(state)
    return (
      <div className="done-page">
        <SVGCheckMark />
        <p>
          Please verify your email address, you should have received an email from
          us already!
        </p>
      </div>
    );
  };