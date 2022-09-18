//  import React and ReactDom
import React from "react";
import ReactDOM from "react-dom"; 

//Craate a react component
const App = () => {
    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style= {{ backgroundColor: 'green', color: 'white '}}>Submit</button>
        </div>
    );
};

//React Dom

ReactDOM.render( <App />,document.querySelector('#root'));