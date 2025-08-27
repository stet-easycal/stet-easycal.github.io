import { createContext} from 'react';

interface DataProps {
	stet: number;
	aud: number;
	chy: number;
	refresh: () => void;
}

const DataContext = createContext<DataProps>({
  stet: 10,
	aud: 0,
	chy: 0,
	refresh: () => {}
});

export default DataContext;
