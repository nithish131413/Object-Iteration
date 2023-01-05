import React from "react";
import "./style.css";

const base = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};




export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <table>
      <tbody>
        {Object.keys(base).map((key,value) => (
          <tr key={key}>
            {/* <td>{key}</td> */}
            <td>{base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>



    </div>
  );
}
