import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";

class EmployeeDirectory extends Component {
    state = {
        search: "",
        searchResults: []
    };

    componentDidMount() {
        this.getEmployees()
    };
    
    getEmployees = () => {
        API()
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };

    sortName = event => {

    };

    sortEmail = event => {

    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const search = event.target.search;
    
        // Updating the input's state
        this.setState({
          [search]: value
        });
        this.handleSearchChange(value);
      };

    handleSearchChange = value => {
        console.log(value);
    };

    render () {
        return(
            <div>
                <SearchForm 
                handleInputChange={this.handleInputChange}
                handleSearchChange={this.handleSearchChange}
                />
                <RenderTable 
                
                />
            </div>
        )
    }
}

function RenderTable(props) {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th onClick={props.sortName} style={{cursor: 'pointer'}}>Name</th>
                    <th>Phone #</th>
                    <th onClick={props.sortEmail} style={{cursor: 'pointer'}}>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(data => (
                    <tr key={data.id.value}>
                        <td><img src={data.picture.thumbnail} alt="employee" /></td>
                        <td>{data.name.first} {data.name.last}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeDirectory;