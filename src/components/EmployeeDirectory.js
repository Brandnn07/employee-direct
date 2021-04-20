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
        axios.get("https://randomuser.me/api/?results=30&nat=us")
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
        event.preventDefault();
        
        this.setState({
          search: event.target.value
        })
        const input = event.target.value
        const sorted = this.state.results.filter(employee => {
          const sortedEmps = [employee.name.first, employee.name.last]
          return sortedEmps.some(employee => employee.includes(input))
        
        })

        this.setState({
            employeesSorted: sorted
        })
    
      };

    

    render () {
        return(
            <div>
                <SearchForm 
                handleInputChange={this.handleInputChange}
                />
                {this.state.employeesSorted.length ? (
            <RenderTable 
                handleInputChange={this.handleInputChange}
                onClick={this.sortName}
                results={this.state.employeesSorted}
                />
                ) : (
                    <RenderTable 
                handleInputChange={this.handleInputChange}
                onClick={this.sortName}
                results={this.state.results}
                />
                )
            }
                

                
            </div>
        )
    }
}


export default EmployeeDirectory;