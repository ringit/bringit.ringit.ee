import React from 'react';

import { DataContext, type DataContextType } from '~/context';

function useStore() {
  const { event } = React.useContext<DataContextType>(DataContext);

  return {
    event,
  };
}

export { useStore };
