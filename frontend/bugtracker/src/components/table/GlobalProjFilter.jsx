import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalProjFilter = ({ filter, setFilter }) => {
  
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 2000);

  return (
    <span>
      Search:{""}
      <input value={value} onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }} />
    </span>
  );
};

export default GlobalProjFilter;
