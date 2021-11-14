import "./App.css";
import React from "react";
import Todo from "./TodoComponent/Todo";
import Header from "./StaticComponent/Header";
import Footer from './StaticComponent/Footer';

class App extends React.Component{
	render() {
		return 	<div  >
					<Header />
					<Todo />
					<Footer />
			</div>;
		
	}
}

export default App;
