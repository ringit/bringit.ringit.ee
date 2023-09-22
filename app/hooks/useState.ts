import React from 'react';

import { DataContext, type DataContextType } from '~/context';

function useState() {
  const { schedule } = React.useContext<DataContextType>(DataContext);

  return {
    schedule,
  };
}

export { useState };
