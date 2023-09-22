import * as React from 'react';

export interface Schedule {
  time: string;
  name: string;
  title: string;
}

export interface DataContextType {
  schedule: Schedule[];
}

export const DataContext = React.createContext<DataContextType>({
  schedule: [],
});
