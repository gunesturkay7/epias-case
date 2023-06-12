/* Dependencies */
import Table from "../../../components/Table/Table";
/* Components */
import { useSelector } from "react-redux";

const ComponentA = () => {
  const data = useSelector((state) => state.componentA.data);

  const columns = [
    { key: "id", title: "Id" },
    { key: "contract", title: "Kontrat" },
    { key: "offer", title: "Teklif" },
    { key: "data", title: "Data" },
  ];
  const filterColumns = ["contract"];

  return (
    <div>
      <Table data={data} columns={columns} filterColumns={filterColumns} />
    </div>
  );
};

export default ComponentA;
