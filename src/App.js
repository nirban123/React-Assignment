import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import OwnerSearch from "./OwnerSearch";

function App() {
  const [values, setValues] = useState({
    ownerDetails: [],
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    let multiValue = [];
    // if(name == 'riskForum') {
    //     if(e.target.checked) {
    //        multiValue.push(e.target.value);
    //        value = multiValue;
    //     }
    // }
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleOwnerSelect = (selectedVal) => {
    console.log("selectedVal", selectedVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="sbu" className="form-label">
              SBU <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm form-control form-control-sm"
              id="sbu"
              name="sbu"
              onChange={(e) => changeHandler(e)}
              required
            >
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
          <div className="col p-2">
            <label htmlFor="account" className="form-label">
              Account <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="account"
              name="account"
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>
          <div className="col-1"></div>
          <div className="col p-2 ">
            <label htmlFor="projectid" className="form-label">
              Project Id <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm form-control form-control-sm"
              id="projectId"
              name="projectId"
              onChange={(e) => changeHandler(e)}
              required
            >
              <option value>Select Project Id</option>
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
          <div className="col p-2">
            <label htmlFor="category" className="form-label">
              Category <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm  form-control form-control-sm"
              id="category"
              name="category"
              onChange={(e) => changeHandler(e)}
              required
            >
              <option value>Select Category</option>
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="escalationDate" className="form-label">
              Escalation Date
            </label>
            <input
              type="date"
              className="form-control form-control-sm"
              id="escalationDate"
              name="escalationDate"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="col p-2">
            <label htmlFor="severity" className="form-label">
              Severity <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm form-control form-control-sm"
              id="severity"
              name="severity"
              onChange={(e) => changeHandler(e)}
              required
            >
              <option value>Select Severity</option>
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col p-2">
            <label htmlFor="region" className="form-label">
              Region <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="region"
              name="region"
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>
          <div className="col p-2">
            <label htmlFor="location" className="form-label">
              Location <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="location"
              name="location"
              onChange={(e) => changeHandler(e)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="risk" className="form-label">
              Risk/Issue Statement{" "}
              <span className="bi bi-info-circle-fill blue-color"> </span>{" "}
              <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control form-control-sm"
              id="risk"
              name="risk"
              onChange={(e) => changeHandler(e)}
              required
              defaultValue={""}
            />
          </div>
          <div className="col-1"></div>
          <div className="col p-2">
            Root Cause{" "}
            <span className="bi bi-info-circle-fill blue-color"> </span>
            <textarea
              className="form-control form-control-sm"
              id="rootCause"
              name="rootCause"
              onChange={(e) => changeHandler(e)}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="itemDescription" className="form-label">
              Item Description{" "}
              <span className="bi bi-info-circle-fill blue-color"> </span>{" "}
              <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control form-control-sm"
              rows={5}
              id="itemDescription"
              name="itemDescription"
              onChange={(e) => changeHandler(e)}
              required
              defaultValue={""}
            />
          </div>
          <div className="col-1"></div>
          <div className="col p-2">
            <label htmlFor="currentState" className="form-label">
              Current State
            </label>
            <textarea
              className="form-control form-control-sm"
              rows={5}
              id="currentState"
              name="currentState"
              onChange={(e) => changeHandler(e)}
              defaultValue={""}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th scope="col">
                  Action Description{" "}
                  <i className="bi bi-plus-circle-fill blue-color" />
                </th>
                <th scope="col">Owner ID</th>
                <th scope="col">Owner Name</th>
                <th scope="col">Target Closure Date</th>
                <th scope="col">Comments</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <textarea
                    className="form-control form-control-sm"
                    id="actionDescription"
                    name="actionDescription"
                    defaultValue={""}
                  />
                </td>
                <td className="pt-3">
                  <OwnerSearch onChange={handleOwnerSelect} />
                </td>
                <td className="pt-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="ownerName"
                    name="ownerName"
                    disabled
                  />
                </td>
                <td className="pt-3">
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="target-closure-date"
                    name="target-closure-date"
                  />
                </td>
                <td>
                  <textarea
                    className="form-control form-control-sm"
                    id="comments"
                    name="comments"
                    defaultValue={""}
                  />
                </td>
                <td>
                  <a href="#">
                    <i className="bi bi-trash" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="totalFTEs" className="form-label">
              Total FTEs<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="totalFTEs"
              name="totalFTEs"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="col p-2">
            <label htmlFor="impactArea" className="form-label">
              Impact Area <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm form-control form-control-sm"
              id="impactArea"
              name="impactArea"
              onChange={(e) => changeHandler(e)}
              required
            >
              <option value>Select Impact Area</option>
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
          <div className="col-sm-1"></div>
          <div className="col p-2">
            <label htmlFor="issueResolutionDate" className="form-label">
              Issue Resolution Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control form-control-sm"
              id="issueResolutionDate"
              name="issueResolutionDate"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="col p-2">
            <label htmlFor="dhdIssueId" className="form-label">
              DHD Issue Id
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="dhdIssueId"
              id="dhdIssueId"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-2">
            <label htmlFor="dhdCreationDate" className="form-label">
              DHD Creation Date
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="dhdCreationDate"
              name="dhdCreationDate"
              onChange={(e) => changeHandler(e)}
              disabled
            />
          </div>
          <div className="col p-2">
            <label htmlFor="businessImpact" className="form-label">
              Business Impact <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="businessImpact"
              name="businessImpact"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="col-sm-1"></div>
          <div className="col p-2">
            <label htmlFor="revenueImpact" className="form-label">
              Revenue Impact-FY'23($ MM)
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="revenueImpact"
              name="revenueImpact"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="col p-2">
            <label htmlFor="marginImpact" className="form-label">
              Margin Impact-FY'23($ MM)
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="marginImpact"
              id="marginImpact"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col pt-2">
            Risk Forum
            <br />
            <div className="form-check  form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="riskForum"
                onChange={(e) => changeHandler(e)}
                defaultValue="DDR"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                DRR
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="riskForum"
                onChange={(e) => changeHandler(e)}
                defaultValue="ERR"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                ERR
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="riskForum"
                onChange={(e) => changeHandler(e)}
                defaultValue="EC"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                EC
              </label>
            </div>
          </div>
          <div className="col pt-2">
            <label htmlFor="status" className="form-label">
              Status <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-sm form-control form-control-sm"
              id="status"
              name="status"
              onChange={(e) => changeHandler(e)}
            >
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col p-2"></div>
          <div className="col p-2"></div>
        </div>
        <br />
        <div className="row">
          <div className="col text-end">
            <input type="submit" className="btn btn-info text-white" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
