import React, { Component } from "react";
// import API from "../utils/API";
import SearchForm from "./SearchForm";
import RenderTable from "./RenderTable";
import axios from "axios";

class EmployeeDirectory extends Component {
    state = {
        search: "",
        results: [],
        employeesSorted: [],
        filter: "up"
    };

    componentDidMount() {
        this.getEmployees()
    };
    
    getEmployees = () => {
        axios.get("https://randomuser.me/api/?results=25&nat=us")
        .then(res => this.setState({ results: res.data.results }) )
        .catch(err => console.log(err, "here"));
    };

    sortName = (event) => {
        
    };

    sortEmail = (event) => {
        console.log("yeppers")
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
        console.log(value)
    };

    render () {
        return(
            <div>
                <SearchForm 
                handleInputChange={this.handleInputChange}
                handleSearchChange={this.handleSearchChange}
                />
                <RenderTable 
                onClick={this.sortName}
                results={this.state.results}

                />
            </div>
        )
    }
}


export default EmployeeDirectory;