import React, {useState, useRef} from "react";

const OWNERS = [
  {
    id: "1234",
    name: "David",
  },
  {
    id: "1235",
    name: "John",
  },
  {
    id: "2236",
    name: "Mathue",
  },
];
const ownerInitialState = {};

function OwnerSearch({onChange, index}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const newRef = useRef(null);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    // Save state
    setSearchQuery(searchValue);

    // If search query perform search
    if (searchValue) {
      const sResult = OWNERS.filter((item) =>
        item.id.startsWith(searchValue) ? true : false,
      );
      setSearchResult(sResult);
    } else {
      setSearchResult([]);
    }
  };

  const handleSelect = (elm) => {
    onChange(elm, index);
    newRef.current.style.display = "none";
  };

  const renderSearchHints = () => {
    if (searchQuery) {
      if (searchResult && searchResult.length) {
        return (
          <div className="hints-wrapper" ref={newRef}>
            <ul className="list-group">
              {searchResult.map((elm) => (
                <li
                  key={elm.id}
                  className="list-group-item list-group-item-action"
                  role="presentation"
                  onClick={() => handleSelect(elm)}>
                  {elm.name}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return (
        <div className="hints-wrapper">
          <ul className="list-group">
            <li className="list-group-item ">No result found</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="owner-search">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="search"
          value={searchQuery ? searchQuery : null}
          onChange={handleSearch}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary button-search"
            type="button">
            <i className="bi bi-search" />
          </button>
        </div>
      </div>

      {renderSearchHints()}
    </div>
  );
}

export default OwnerSearch;
