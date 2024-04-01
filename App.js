import React from "react";
import ReactDOM from "react-dom/client";

//This is nothing but React Element
const jsxHeading = (
<h1>
    Namaste React ❤️‍🔥
</h1>
);


const Title =() => (
    <h1>
        Namaste React ❤️‍🔥
    </h1>
    );
//Here comes React Functional Component

const HeadingComponent = () => {
   return (
        <div>
            <Title/>
            <h2>React Functional Component  </h2>
        </div>
    )
}
// const heading = React.createElement("h1", {id : "title"}, "Namaste React ❤️‍🔥");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);