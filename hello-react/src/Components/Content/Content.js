import "./Content.modules.css";
import Card from "../Card/Card";

import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

function Content() {
  return (
    <div className="content">
      <Card
        title="Declarative"
        imgSource={icon1}
        text="React makes it painless to create interactive UIs."
      />
      <Card
        title="Components"
        imgSource={icon2}
        text="Build encapsulated components that manage their state."
      />
      <Card
        title="Single-way"
        imgSource={icon3}
        text="A set of immutable values are passed to the component's."
      />
      <Card
        title="JSX"
        imgSource={icon4}
        text="Statically typed, designed to run on modern browsers."
      />
      
    </div>
  );
}

export default Content;
