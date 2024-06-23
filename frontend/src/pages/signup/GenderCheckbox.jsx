const GenderCheckbox = ({onCheckboxChange, selectedValue}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedValue === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-primary">Male</span>
          <input
            type="checkbox"
            checked={selectedValue === "male"}
			onChange={() => onCheckboxChange("male")}
            className="checkbox border-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedValue === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-primary">Female</span>
          <input
            type="checkbox"
            checked={selectedValue === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-primary"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
