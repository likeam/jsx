//  import React and ReactDom
import React from "react";
import ReactDOM from "react-dom"; 

//Craate a react component
const App = () => {
    const buttonText = {text: 'Click me' };
    const labelText = 'Enter name:'   ;
    return (
        <div style= {{ backgroundColor: 'gray', color: 'black '}}>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style= {{ backgroundColor: 'gray', color: 'black '}}> {buttonText.text}</button>
        </div>
    );
};

//React Dom

ReactDOM.render( <App />,document.querySelector('#root'));