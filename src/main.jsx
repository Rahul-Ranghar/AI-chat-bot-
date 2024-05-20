
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<ContextProvider>
			<ToastContainer />
			<App />
		</ContextProvider>
	</Router>
);
