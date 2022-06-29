import React from "react";
import Table from "../components/Table/Table";

class TableView extends React.Component {

	constructor(){
		super();
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
			<div id="content-wrapper" className="d-flex flex-column">			
				<div id="content">
	
					<Table data={ this.state.moviesList } columns={ this.state.tableColumns } />
	
				</div>
			</div>
		)
	}
}

export default TableView;