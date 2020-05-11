import React from 'react'

export default function FormPagePrivacy (props) {
    const { state, onSetState, onSubmit } = props;
    return (
      <form onSubmit={onSubmit}>
        <div className="field checkbox">
          <input
            type="checkbox"
            label="updates"
            defaultValue={state.updates}
            checked={state.updates}
            onChange={onSetState("updates")}
            data-testid="checkbox"
          />
          Receive updates about Tray.io product by email
        </div>
        <div className="field checkbox">
          <input
            type="checkbox"
            label="communication"
            defaultValue={state.communication}
            checked={state.communication}
            onChange={onSetState("communication")}
          />
          Receive communication by email for other products created by the Tray.io
          team
        </div>
        <button>Submit</button>
      </form>
    );
  };