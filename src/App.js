// import logo from './logo.svg';
import "./App.css";
import Addition from "./Addition";

const styles = {
	container: {
		backgroundColor: "#113f67",
		padding: "1em",
		color: "#e7eaf6",
	},
	heading: {
		color: "#ECB365",
	},
};

const App = () => {
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Addition App</h1>
			<Addition numberOne={10} numberTwo={35} />
			<Addition numberOne={2} numberTwo={48} />
			<Addition numberOne={100} numberTwo={57} />
			<Addition numberOne={992} numberTwo={8} />
			<Addition numberOne={5} numberTwo={7} />
		</div>
	);
};

export default App;
