import * as React from 'react';

import { type data } from '~/data/events';

export interface DataContextType {
  event: (typeof data)[0] | null;
}

export const DataContext = React.createContext<DataContextType>({
  event: null,
});
