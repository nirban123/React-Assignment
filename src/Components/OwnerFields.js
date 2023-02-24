import React from "react";
import OwnerSearch from "../Components/OwnerSearch";

function OwnerFields({
  onChange,
  onChangeOwner,
  onOwnerAdd,
  ownerDetails,
  onOwnerDelete,
}) {
  return (
    <table className="table table-bordered">
      <thead className="table-primary">
        <tr>
          <th scope="col">
            <button type="button" onClick={onOwnerAdd}>
              Action Description{" "}
              <i className="bi bi-plus-circle-fill blue-color" />
            </button>
          </th>
          <th scope="col">Owner ID</th>
          <th scope="col">Owner Name</th>
          <th scope="col">Target Closure Date</th>
          <th scope="col">Comments</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {ownerDetails.map((item, index) => (
          <tr key={`owner_${item.id}`}>
            <td>
              <textarea
                className="form-control form-control-sm"
                id="actionDescription"
                name="owner-actionDescription"
                onChange={(e) => onChange(e, index)}
                value={item["owner-actionDescription"]}
              />
            </td>
            <td className="pt-3">
              <OwnerSearch onChange={onChangeOwner} index={index} />
            </td>
            <td className="pt-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="ownerName"
                name="owner-ownerName"
                value={item.ownerName}
                disabled
              />
            </td>
            <td className="pt-3">
              <input
                type="date"
                className="form-control form-control-sm"
                id="target-closure-date"
                name="owner-target-closure-date"
                value={item["owner-target-closure-date"]}
                onChange={(e) => onChange(e, index)}
              />
            </td>
            <td>
              <textarea
                className="form-control form-control-sm"
                id="comments"
                name="owner-comments"
                onChange={(e) => onChange(e, index)}
                value={item["owner-comments"]}
              />
            </td>
            <td>
              {index > 0 ? (
                <button onClick={() => onOwnerDelete(index)}>
                  <i className="bi bi-trash" />
                </button>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OwnerFields;
