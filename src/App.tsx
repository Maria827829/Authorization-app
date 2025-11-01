import style from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/welcomePage/welcomePage';
import Footer from 'components/common/Footer/Footer';
import SignInPage from 'pages/signInPage/signInPage';
import SignUpPage from 'pages/signUpPage/signUpPage';
import UsersPage from 'pages/usersPage/usersPage';

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
					<Route
						path={'/users'}
						element={<UsersPage />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App;
