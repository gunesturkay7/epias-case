/* Dependencies */
import { saveRow, toggleForm, updateNewRow } from "../../../redux/componentCFeature/componentCSlice";
import { useSelector, useDispatch } from "react-redux";
/* Components */
import CustomInput from "../../../components/Input/CustomInput";
import Button from "../../../components/Button/Button";
import Table from "../../../components/Table/Table";
/* Styles */
import "./ComponentC.scss";

const ComponentC = () => {
  const dispatch = useDispatch();
  const { data, showForm, newRow } = useSelector((state) => state.componentC);

  const handleInputChange = (e, fieldName) => {
    dispatch(updateNewRow({ [fieldName]: e.target.value }));
  };

  const handleAddNew = () => {
    dispatch(toggleForm());
  };

  const handleSave = () => {
    dispatch(saveRow(newRow));
  };

  const columns = [
    { key: "id", title: "Id" },
    { key: "contract", title: "Kontrat" },
    { key: "offer", title: "Teklif" },
    { key: "data", title: "Data" },
  ];

  return (
    <div>
      <Table data={data} columns={columns} filterColumns={["contract"]} controller={false} header={false} />
      <div className="component-c">
        {showForm && (
          <div className="work-area-form-area-1">
            <CustomInput variant="outlined" placeholder="No giriniz" onChange={(e) => handleInputChange(e, "id")} />
            <CustomInput
              variant="outlined"
              placeholder="Kontrat giriniz"
              onChange={(e) => handleInputChange(e, "contract")}
            />
            <CustomInput
              variant="outlined"
              placeholder="Teklif giriniz"
              onChange={(e) => handleInputChange(e, "offer")}
            />
            <CustomInput variant="outlined" placeholder="Data giriniz" onChange={(e) => handleInputChange(e, "data")} />
            <Button variant="success" onClick={handleSave}>
              Kaydet
            </Button>
          </div>
        )}
        <Button variant="success" onClick={handleAddNew}>
          Yeni Ekle
        </Button>
      </div>
    </div>
  );
};

export default ComponentC;
