import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footor";
import Axios from "axios";

function App() {

    const [name, setname] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    const data = {
        "userId": "1234",
        "id": "2222",
        "title": "EWSHJehdbk",
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    }
    useEffect(() => {
        Axios.get(url).then(res => {
            console.log(res.data);
            setname(res.data);
        }).catch(err => console.log(err))

    }, []);

    function Update() {
        Axios.put("https://jsonplaceholder.typicode.com/posts/1", data)
            .then(data=> {
                setname([data]);
            })
            .catch((err) => console.log(err))
    }

    function Delete() {
        Axios.delete("https://jsonplaceholder.typicode.com/posts/1", data)
            .then(data => {
                setname([data]);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <Header />
            <h1>Comments</h1>
            <button className="btn1" onClick={Update}>Update the Resource</button>
            <button className="btn2" onClick={Delete}>Delete the Resource</button>
            <h2>No of Comments : {name.length}</h2>
            {name.map((data, index) => {
                return (
                    <div className="comments">
                        <br />
                        Name: {data.name}
                        <p>Posted : {data.id} month ago</p>
                        {data.body}
                        <br />
                    </div>
                );
            })}
            <Footer />
        </div>
    );
}

export default App;