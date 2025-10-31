import style from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/welcomePage/welcomePage';
import Footer from 'components/common/Footer/Footer';

function App() {

	return (
		<div className={style.app}>
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<WelcomePage />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App;
