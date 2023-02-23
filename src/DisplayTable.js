import React from "react";

const DisplayTable = (props) => {
  function ownerNames(ownerDetails) {
    let results = ownerDetails.map((ele, index) => ele["ownerName"]);
    return results.join(",");
  }
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">SBU</th>
            <th scope="col">Account</th>
            <th scope="col">Category</th>
            <th scope="col">Severity</th>
            <th scope="col">Location</th>
            <th scope="col">Risk Forum</th>
            <th scope="col">Impact Area</th>
            <th scope="col">Date Of Opening</th>
            <th scope="col">Next Review Date</th>
            <th scope="col">Resolution Date</th>
            <th scope="col">Status</th>
            <th scope="col">Owner</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((ele) => (
            <tr key="main-table">
              <td key="sbu">{ele.sbu}</td>
              <td key="account">{ele.account}</td>
              <td key="category">{ele.category}</td>
              <td key="severity">{ele.severity}</td>
              <td key="location">{ele.location}</td>
              <td key="risk">{ele.riskForum.toString()}</td>
              <td key="impactArea">{ele.impactArea}</td>
              <td key="creationDate">{ele.dhdCreationDate}</td>
              <td key="reviewDate">Review Date</td>
              <td key="resolutionDate">{ele.issueResolutionDate}</td>
              <td key="status">{ele.status}</td>
              <td key="owner">{ownerNames(ele.ownerDetails)}</td>
              <td key="eye">
                <i className="bi bi-eye"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayTable;
