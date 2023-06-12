import { useSelector } from "react-redux";
import "./ComponentB.scss";

const ComponentB = () => {
  const sizes = useSelector((state) => state.sizes.sizes);

  return (
    <div className="size-indicator">
      <div className="size-indicator__content">
        Ayarlar
        <br />
        <br />
        Yatay Pencere Değerleri: {sizes.parent[0]}% - {sizes.parent[1]}%
        <br />
        <br />
        Üst Dikey Pencere Değerleri : {sizes.child1[0]}% - {sizes.child1[1]}%
        <br />
        <br />
        Alt Dikey Pencere Değerleri: {sizes.child2[0]}% - {sizes.child2[1]}%
      </div>
    </div>
  );
};

export default ComponentB;
