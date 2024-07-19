import React from "react";
import { debounce } from "lodash";



const SearchInput = React.forwardRef(
  ({ className, type, onChange, ...props }, ref) => {
    const debounceOnChangeHandler = debounce(onChange, 300);

    return (
      <div className="input-group">
        <input
          type={type}
          className={`form-control ${className}`}
          ref={ref}
          onChange={debounceOnChangeHandler}
          {...props}
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    );
  }
);

export default SearchInput;
