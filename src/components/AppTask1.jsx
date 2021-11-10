import React, { useEffect, useState } from "react";

const App = () => {
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
                    <button>Update</button>
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

export default App;
