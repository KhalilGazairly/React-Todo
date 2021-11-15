import "./App.css";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Todo from "./TodoComponent/Todo";
import Header from "./StaticComponent/Header";
import Footer from './StaticComponent/Footer';
import Home from './StaticComponent/Home';

class App extends React.Component{
	render() {
		return 	<div  >
					<Header />
						<Routes>
							<Route path="/todo" element={<Todo />}></Route>
							<Route path="/" element={<Home />}></Route>
						</Routes>
				<Footer />
			</div>;

		
		
		
	}
}

export default App;
