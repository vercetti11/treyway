import React from "react";

export default function FormPageUser(props) {
  const { state, onSetState, onSubmit } = props;
  // Field component is implemented in order to reduce the risk of mismatching attributes
  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <Field
        id="name"
        required
        onSetState={onSetState}
        placeholder="John Smith"
        state={state}
      />
      <Field
        id="role"
        onSetState={onSetState}
        placeholder="Software Engineer"
        state={state}
      />
      <Field
        id="email"
        required
        onSetState={onSetState}
        placeholder="email@example.com"
        state={state}
      />
      <Field
        id="password"
        type="password"
        required
        onSetState={onSetState}
        placeholder="**************"
        pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"}
        state={state}
      />
      <button>Submit</button>
    </form>
  );
}

const Field = (props) => {
  const { id, type, required, state, onSetState, placeholder, pattern } = props;
  return (
    <div className="field">
      <label htmlFor={id}>
        {id}:{required && <span>*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        onChange={onSetState(id)}
        defaultValue={state[id]}
      />
    </div>
  );
};