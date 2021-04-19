import React, { Component } from "react";
import API from "../utils/API";

class EmployeeDirectory extends Component {
    state = {
        search = "",
        searchResults = []
    }

    componentDidMount() {
        this.getEmployees()
    }
    
    getEmployees = () => {
        API()
        .then(res => this)
    }

    sortName = event => {

    }

    sortEmail = event => {

    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleSearchChange = event => {
        
    }
}

function renderTable(props) {
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
                {props.map(data => (
                    <tr key={data.id.value}>
                        <td><img src={data.picture.thumbnail} alt="employee" /></td>
                        <td>{props.name.first} {props.name.last}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default renderTable;