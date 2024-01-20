import * as React from 'react';

import { type Event } from '~/data/events';

export interface DataContextType {
  event: Event | null;
}

export const DataContext = React.createContext<DataContextType>({
  event: null,
});
