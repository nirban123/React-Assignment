import React, {useState} from "react";
import "./App.css";
import OwnerFields from "./OwnerFields";
import Controller from "./Controller";
import DisplayTable from "./DisplayTable";

function App() {
  const [totalValues, setTotalValues] = useState([]);
  const [values, setValues] = useState({
    ownerDetails: [{}],
    riskForum: [],
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "riskForum") {
      setValues((values) => {
        const indx = values.riskForum.indexOf(value);
        if (e.target.checked) {
          if (indx < 0) {
            // Insert the value
            return {...values, riskForum: [...values.riskForum, value]};
          }
        } else {
          // Remove the value
          const newRiskForum = [...values.riskForum];
          newRiskForum.splice(indx, 1);
          return {...values, riskForum: newRiskForum};
        }
        return {...values, [name]: value};
      });
    } else if (name.startsWith("owner-")) {
      setValues((prevVal) => {
        let newVal = {...prevVal};
        newVal.ownerDetails[0] = {...newVal.ownerDetails[0], [name]: value};
        return newVal;
      });
    } else {
      setValues((values) => ({...values, [name]: value}));
    }
  };

  const handleOwnerSelect = (selectedVal) => {
    console.log("selectedVal", selectedVal);
    setValues((prevVal) => {
      let newVal = {...prevVal};
      newVal.ownerDetails[0] = {
        ...newVal.ownerDetails[0],
        ownerId: selectedVal.id,
        ownerName: selectedVal.name,
      };
      return newVal;
    });
  };

  const handleOwnerAdd = () => {
    setValues((prevVal) => ({
      ...prevVal,
      ownerDetails: [...prevVal.ownerDetails, {}],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //fetch API
    await Controller(values);
    setTotalValues((totalValues) => [...totalValues, values]);
  };

  console.log(totalValues);

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
              required>
              <option value="">Select sbu</option>
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
              required>
              <option value="">Select Project Id</option>
              <option value="1234">1234</option>
              <option value="1235">1235</option>
              <option value="2236">2236</option>
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
              required>
              <option value>Select Category</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
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
              required>
              <option value="">Select Severity</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
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
          <OwnerFields
            onChange={changeHandler}
            onChangeOwner={handleOwnerSelect}
            onOwnerAdd={handleOwnerAdd}
            ownerDetails={values.ownerDetails}
          />
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
              required>
              <option value="">Select Impact Area</option>
              <option value="Impact Area1">Impact Area1</option>
              <option value="Impact Area2">Impact Area2</option>
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
              Revenue Impact-FY&apos;23($ MM)
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
              Margin Impact-FY&apos;23($ MM)
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
                checked={values.riskForum.includes("DDR")}
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
                checked={values.riskForum.includes("ERR")}
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
                checked={values.riskForum.includes("EC")}
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
              required
              onChange={(e) => changeHandler(e)}>
              <option value="">Select Status</option>
              <option value="Open Progressing">Open Progressing</option>
              <option value="Open Deteriorating">Open Deteriorating</option>
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
      <br />
      <div className="row">
        {totalValues.length > 0 ? <DisplayTable data={totalValues} /> : ""}
      </div>
    </div>
  );
}

export default App;
