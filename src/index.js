//  import React and ReactDom
import React from "react";
import ReactDOM from "react-dom"; 

//Craate a react component
const App = () => {
    return (
        <div style= {{ backgroundColor: 'blue', color: 'white '}}>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style= {{ backgroundColor: 'orangered', color: 'white '}}>Submit</button>
        </div>
    );
};

//React Dom

ReactDOM.render( <App />,document.querySelector('#root'));