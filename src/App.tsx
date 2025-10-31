import style from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/welcomePage/welcomePage';
import Footer from 'components/common/Footer/Footer';
import SignInPage from 'pages/signInPage/signInPage';
import SignUpPage from 'pages/signUpPage/signUpPage';

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
					<Route
						path={'/signUp'}
						element={<SignUpPage />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App;
