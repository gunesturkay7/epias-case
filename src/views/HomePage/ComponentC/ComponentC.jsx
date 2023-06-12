import CustomInput from "../../../components/Input/CustomInput";
import Button from "../../../components/Button/Button";
import Table from "../../../components/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm, saveRow, updateNewRow } from "../../../redux/componentCSlice";

const ComponentC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.componentC.data);
  const showForm = useSelector((state) => state.componentC.showForm);
  const newRow = useSelector((state) => state.componentC.newRow);

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
      <div className="asd">
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
