import React from 'react';

import Panel from "../../panel/Panel";


const Payments = () => {
  return (
    <div className="column is-variable">
      <Panel panelName={'payments'}>
        <h2 className='weight-bold'>Saved Payment Methods</h2>
      </Panel>
    </div>
  );
};

export default Payments