import style from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/welcomePage/welcomePage';
import Footer from 'components/common/Footer/Footer';
import SignInPage from 'pages/signInPage/signInPage';

function App() {

	return (
		<div className={style.app}>
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<WelcomePage />}
					/>
					<Route
						path={'/signIn'}
						element={<SignInPage />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App;
