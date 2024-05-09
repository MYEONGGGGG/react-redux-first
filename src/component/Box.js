import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let count = useSelector(state => state.count);
  let value = useSelector(state => state.value);

  return (
      <div>
        his is Box...{ count }...{ value }
        <GrandSonBox/>
      </div>
  )
}

export default Box;