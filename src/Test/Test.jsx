import { useState } from "react";
import Button from "../components/Button/Button";
import IconButton from "../components/IconButton/IconButton";
import Select from "../components/Select/Select";
import Table from "../components/Table/Table";
import CustomIcon from "./CustomIcon";
import "./Test.scss";
import Dropdown from "../components/Dropdown/Dropdown";
import Avatar from "../components/Avatar/Avatar";
import CheckBoxGroup from "../components/Checkbox/CheckboxGroup";
import CheckBox from "../components/Checkbox/Checkbox";
import CustomInput from "../components/Input/CustomInput";

const Test = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    setIsChecked(event.target.checked);
  };

  const data = [
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.comjohn.doe@example.comjohn.doe@example.comjohn.doe@example.comjohn.doe@example.com",
      school: "MIT",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "212-123-4567",
    },
    {
      name: "Jane Doe",
      age: 24,
      email: "jane.doe@example.com",
      school: "Harvard",
      phone: "212-123-4567",
      city: "New York",
      state: "NY",
      zip: "10001",
      address: "123 Main St",
    },
    {
      name: "Bob Smith",
      age: 35,
      email: "bob.smith@example.com",
      school: "Yale",
      phone: "212-123-4567",
      address: "123 Main StMainMainMainMainMainMainMainMainMain",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  ];

  const columns = [
    { key: "name", title: "Name" },
    { key: "age", title: "Age" },
    { key: "email", title: "Email" },
    { key: "school", title: "School" },
    { key: "phone", title: "Phone" },
    { key: "city", title: "City" },
    { key: "address", title: "Address" },
    { key: "state", title: "State" },
    { key: "zip", title: "Zip zippipipi" },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  /*   const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }; */
  return (
    <div className="form">
      <h1>Inputs</h1>
      <CustomInput variant="outlined" placeholder="asdas" onChange={(e) => console.log(e.target.value)} />
      <CustomInput error="Please enter a valid email." />
      <CustomInput error="Please enter a valid email." />
      <CustomInput variant="outlined" placeholder="asdas" onChange={(e) => console.log(e.target.value)} />
      <h1>Buttons</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="error" disabled>
        Error
      </Button>
      <Button variant="primary" loading>
        Loading...
      </Button>
      <Button variant="success" icon={<CustomIcon size="20px" />}>
        Success
      </Button>
      <h1>Icon Button</h1>
      <IconButton variant="primary" size="small" icon={<CustomIcon />} onClick={(e) => console.log(e)} />
      <IconButton variant="secondary" size="medium" icon={<CustomIcon />} />
      <IconButton variant="secondary" size="large" icon={<CustomIcon />} />
      <h1>Table</h1>
      <Table data={data} columns={columns} />
      <h1>Select</h1>
      <Select options={options} size="xs" variant="primary" onChange={(e) => console.log(e.target.value)} />
      <Select options={options} size="md" variant="primary" placeholder="Select an option" />
      <h1>Dropdown</h1>
      <Dropdown trigger={<IconButton icon={<CustomIcon size="20px" />} />}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </Dropdown>
      <h1>Avatar</h1>
      <Avatar
        src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        alt="Example Avatar"
        size="medium"
        variant="initials"
      />
      <Avatar alt="Example Avatar" size="medium" variant="circle" name="John Doe" />
      <h1>Checkbox</h1>
      <CheckBox
        label="I agree to the terms and conditions"
        name="terms"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <CheckBoxGroup
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        name="options"
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        size="md"
        variant="primary"
        placeholder="Select an option"
      />

      {/* <Select options={options} size="md" variant="primary" placeholder="Select an option" /> */}
    </div>
  );
};

export default Test;
