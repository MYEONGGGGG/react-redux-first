import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let count = useSelector(state => state.count);
  let value = useSelector(state => state.value);
  let id = useSelector(state => state.id);
  let pwd = useSelector(state => state.pwd);

  return (
      <div>
        his is Box...{ count }...{ value }
        <GrandSonBox/>
        Login // ID: { id } & PWD: { pwd }
      </div>
  )
}

export default Box;