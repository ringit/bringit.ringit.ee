import React from 'react';

import { DataContext, type DataContextType } from '~/context';

function useStore() {
  const { schedule } = React.useContext<DataContextType>(DataContext);

  return {
    schedule,
  };
}

export { useStore };
