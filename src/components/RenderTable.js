import React from "react";

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
                {props.results.map(results => (
                    <tr key={results.id.value}>
                        <td><img src={results.picture.thumbnail} alt="employee" /></td>
                        <td>{results.name.first} {results.name.last}</td>
                        <td>{results.phone}</td>
                        <td>{results.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default RenderTable;