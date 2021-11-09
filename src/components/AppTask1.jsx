import React from "react";
import Axios from "axios";

function AppTask1() {

    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const data = {
        "userId": "1234",
        "id": "2222",
        "title": "EWSHJehdbk",
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    }
    function Create(){
        Axios.get(url).then(res => {
            console.log(res.data);
        }).catch(err => console.log(err))
    }
    function Read(){
        Axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
    }
    function Update() {
        Axios.put(url, data)
            .then(data=> {
                console.log(data);
            })
            .catch((err) => console.log(err))
    }

    function Delete() {
        Axios.delete(url, data)
            .then(data => {
                console.log(data);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <button  onClick={Create}>Create the Resource</button>
            <button  onClick={Read}>Read the Resource</button>
            <button  onClick={Update}>Update the Resource</button>
            <button  onClick={Delete}>Delete the Resource</button>
        </div>
    );
}

export default AppTask1;