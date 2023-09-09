import React from "react";

function hello() {
    console.log("Clicked")
}

function App4() {

    return (
        <div>
            <img onMouseOver={() => console.log("Hovered")} src="https://ph-files.imgix.net/ec5b15c8-9103-4be0-943a-65b2772e1683.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2" />
            <br />
            <br />
            <button onClick={hello} >Click me</button>

        </div>
    )
}

export default App4