import React, { useState } from "react";
import FormPageUser from "./formPageUser";
import FormPagePrivacy from "./formPagePrivacy";
import DonePage from "./donePage";
import "./App.css";

function App() {
  const formPages = ["User", "Privacy", "Done"];
  const [activePage, setActivePage] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <nav>
        {formPages.map((page, index) => (
          <button
            key={page}
            disabled={progress < index}
            onClick={() => setActivePage(index)}
            className={page === formPages[activePage] ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </nav>
      <FormPages
        onSetProgres={setProgress}
        onNextPage={setActivePage}
        activePage={activePage}
      />
    </div>
    // About the navigation //
    // Button onClick could setActivePage(page) instead of 
    // setActivePage(index) but it is faster to iterate setting
    // state manually with a number instead of with a string.`
  );
}

const FormPages = (props) => {
  const [state, setState] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    updates: true,
    communication: false,
  });

  const handleSetState = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };
  const handleSetCheckboxState = (input) => () => {
    setState({ ...state, [input]: !state[input] });
  };

  const moveToNextPage = (event, nextPageIndex) => {
    event.preventDefault();
    props.onNextPage(nextPageIndex);
    props.onSetProgres(nextPageIndex);
  };

  switch (props.activePage) {
    case 0:
      return (
        <FormPageUser
          state={state}
          onSetState={handleSetState}
          onSubmit={(event) => moveToNextPage(event, 1)}
        />
      );
    case 1:
      return (
        <FormPagePrivacy
          state={state}
          onSetState={handleSetCheckboxState}
          onSubmit={(event) => moveToNextPage(event, 2)}
        />
      );
    case 2:
      return <DonePage state={state} />;
    default:
      return <p>Loading</p>;
  }
};

export default App;
