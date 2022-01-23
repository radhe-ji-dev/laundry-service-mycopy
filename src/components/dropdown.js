import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap";

function Dropdown() {
  // ButtonDropdown open state
  const [dropdownOpen, setOpen] = React.useState(false);

  return (
    <div
      style={{
        marginTop: 5,
        display: "block",
      }}
    >
      <ButtonDropdown
        toggle={() => {
          setOpen(!dropdownOpen);
        }}
        isOpen={dropdownOpen}
        className="col-md-12 "
      >
        <DropdownToggle
          className="bg-white text-dark col-md-12 "
          caret
        ></DropdownToggle>
        <DropdownMenu className="  float-md-start col-md-12">
          <DropdownItem header></DropdownItem>
          <DropdownItem>One</DropdownItem>
          <DropdownItem>Two</DropdownItem>
          <DropdownItem>Three</DropdownItem>
          <DropdownItem>Four</DropdownItem>
          <DropdownItem>Five</DropdownItem>
          <DropdownItem>Six</DropdownItem>
          <DropdownItem>Seven</DropdownItem>
          <DropdownItem>Eight</DropdownItem>
          <DropdownItem>Nine</DropdownItem>
          <DropdownItem>Zero</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default Dropdown;
