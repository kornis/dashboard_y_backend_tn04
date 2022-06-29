import React from "react";
import Topbar from "../components/Topbar/Topbar";
import ContentRowTop from "../components/ContentRowTop/ContentRowTop";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";

class ContentWrapper extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			moviesList: [],
			tableColumns: []
		}
	}

	componentDidMount(){
		const url = "http://localhost:3001/api/movies";
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let columns = ["id","title","awards","length","rating"];
				this.setState({ moviesList: data.data, tableColumns: columns });
			})
			.catch((error) => console.error(error));
	}

	render(){
		return(
			<>			
				{ this.props.children }
				
			</>
		)
	}
}

export default ContentWrapper;