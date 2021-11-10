import React, { useEffect, useState } from "react";

function AppTask1(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    function AddUser({ onAdd }) {
        const handleOnSubmit = (e) => {
            e.preventDefault();
            onAdd(e.target.name.value, e.target.email.value);
            e.target.name.value = "";
            e.target.email.value = "";
        }
        return (
            <div>
                <form onSubmit={handleOnSubmit}>
                    <h3>Add User</h3>
                    <input placeholder="Name" name="name" />
                    <input placeholder="Email" name="email" />
                    <button onSubmit={handleOnSubmit}>Create</button>
                    <hr />
                </form>
            </div>
        );
    };
    function User({ id, email, name, onDelete }){

        const handleDelete = () => {
            onDelete(id);
        }

        return (
            <div className='list'>
                <span>{name}</span>
                <span>{email}</span>
                <span>
                    <button onClick={updateUser}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </span>
            </div>
        )
    }

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    };

    const onAdd = async (name, email) => {
        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => {
                if (res.status !== 201) {
                    return;
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status !== 200) {
                    return;
                } else {
                    setUsers(
                        users.filter((user) => {
                            return user.id !== id;
                        })
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    async function updateUser(id){
    await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          name: 'foo',
          email: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            setUsers((users) => [ data,...users]);
      })
    }
  

    console.log(users);

    return (
        <div className="App">
            <br />
            <AddUser onAdd={onAdd} />
            <div>
                {users.map((user) => (
                    <User
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppTask1;
