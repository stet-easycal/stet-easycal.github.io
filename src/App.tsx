import { lazy, useEffect, useState } from 'react';
import './App.css';
import DataContext from './Context/dataContext';
import Router, { Loader } from './router';
import DialogContext from './Context/dialogContext';
import SnackbarContext from './Context/snackbarContext';
import CustomerAppBar from './Component/AppBar';
import { t } from 'i18next';

const Update = Loader(lazy(() => import('./Component/Tool')));
const Background = Loader(lazy(() => import('./Component/Background')));
const SnackBar = Loader(lazy(() => import('./Component/SnackBar')));

const App = () => {
  const [open, setOpen] = useState(false);
  const stet = 10;

  const [message, setMessage] = useState<string>('');
  const [snackOpen, setSnackOpen] = useState<boolean>(false);

	const [aud, setAud] = useState<number>(0);
	const [chy, setChy] = useState<number>(0);

	const [refreshing, setRefreshing] = useState<boolean>(false);
	const refresh = () => setRefreshing(!refreshing);

	const update = () => {
		fetch("https://api.frankfurter.dev/v1/latest?base=USD", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
		.then(data => {
			setAud(data.rates.AUD);
			setChy(data.rates.CNY);
			setMessage(t("update"));
			setSnackOpen(true);
		})
		.catch(err => {
			console.log(err);
			setMessage(t("updateError"));
			setSnackOpen(true);
		});
	}

	useEffect(() => {
		update();
	}, [refreshing]);

  return (
    <SnackbarContext.Provider value={{ message, setMessage, snackOpen, setSnackOpen }}>
      <DialogContext.Provider value={{ open, setOpen }}>
				<DataContext.Provider value={{ stet, aud, chy, refresh }}>
					<Background />
					<CustomerAppBar />
					<Router />
					<Update />
					<SnackBar />
				</DataContext.Provider>
      </DialogContext.Provider>
    </SnackbarContext.Provider>
  );
}

export default App;
