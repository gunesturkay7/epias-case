import { setParentSizes, setChild1Sizes, setChild2Sizes } from "../../redux/sizesSlice";
import "./HomePage.scss";
import ComponentA from "./ComponentA/ComponentA";
import ComponentC from "./ComponentC/ComponentC";
import ComponentB from "./ComponentB/ComponentB";
import { useDispatch, useSelector } from "react-redux";

import Split from "react-split";

const HomePage = () => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.sizes.sizes);

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
            <ComponentC />
          </div>
          <div className="pane">Lorem ipsum</div>
        </Split>
      </Split>
    </div>
  );
};

export default HomePage;
