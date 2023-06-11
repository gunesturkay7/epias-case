import { setParentSizes, setChild1Sizes, setChild2Sizes, setSizes } from "../../redux/sizesSlice";
import "./HomePage.scss";
import ComponentA from "./ComponentA/ComponentA";
import ComponentC from "./ComponentC/ComponentC";
import ComponentB from "./ComponentB/ComponentB";
import { useDispatch, useSelector } from "react-redux";
/* import useSyncSizesToLocalStorage from "../hooks/useSyncSizesToLocalStorage"; */

import Split from "react-split";
import { useEffect } from "react";
/* import Test from "../../Test/Test"; */

const HomePage = () => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.sizes);

  // Initially load sizes from localStorage
  useEffect(() => {
    const storedSizes = JSON.parse(localStorage.getItem("sizes"));
    if (storedSizes) {
      dispatch(setSizes(storedSizes));
    }
  }, [dispatch]);

  // Save sizes to localStorage whenever they change
  useEffect(() => {
    if (sizes.parent && sizes.child1 && sizes.child2) {
      localStorage.setItem("sizes", JSON.stringify(sizes));
    }
  }, [sizes]);

  return (
    <div className="home-page">
      <Split
        sizes={sizes.parent}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="vertical"
        className="split-parent"
        onDragEnd={(sizes) => dispatch(setParentSizes(sizes))}
      >
        <Split
          sizes={sizes.child1}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          className="split-child"
          onDragEnd={(sizes) => dispatch(setChild1Sizes(sizes))}
        >
          <div className="pane">
            {/*     Section 1 - {Math.round(sizes.child1[0])}% */}

            <ComponentA />
          </div>
          <div className="pane">
            <ComponentB />
          </div>
        </Split>
        <Split
          sizes={sizes.child2}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          className="split-child"
          onDragEnd={(sizes) => dispatch(setChild2Sizes(sizes))}
        >
          <div className="pane">
            {/*  Section 3 - {sizes.child2[0]}% */}
            <ComponentC />
          </div>
          <div className="pane">asd</div>
        </Split>
      </Split>
    </div>
  );
};

export default HomePage;
