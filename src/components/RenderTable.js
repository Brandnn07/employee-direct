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
export default RenderTable;