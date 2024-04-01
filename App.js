import React from "react";
import ReactDOM from "react-dom/client";

//This is nothing but React Element
const jsxHeading = (
<h1>
    Namaste React ❤️‍🔥
</h1>
);

//smiple react element
// see how jsx render the javascript variable
const val = 1000
const Elem = () => <span>Span it </span>;
const title = (
    <h1>{Elem()} {val} times Namaste React ❤️‍🔥</h1>
);

//Here comes React Functional Component

const HeadingComponent = () => {
   return (
        <div>
            {title}
            <h2>React Functional Component  </h2>
        </div>
    )
}
// const heading = React.createElement("h1", {id : "title"}, "Namaste React ❤️‍🔥");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);