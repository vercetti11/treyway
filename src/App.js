import React, { useState } from "react";
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
      <form data-testid="form">
        <div className="field">
          <label htmlFor="name">
            name:<span>*</span>
          </label>
          <input id="name" type="text" placeholder="John Smith" required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
