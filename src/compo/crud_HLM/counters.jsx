import React, { Component } from "react";
import CounterItems from "./counterItems";
import style from "./countersCss.module.css";


class Counters extends Component {
    state = {
        tasks: [
            {
                id: 3,
                title: "to study",
            },
            {
                id: 2,
                title: "to sleep",
            },
            {
                id: 1,
                title: "to eat",
            },
        ],
        tempoText: "",
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                data.reverse();
                this.setState({ tasks: data });
            });
        console.log("mounted"); //just testing
    }

    componentDidUpdate() {
        console.log("updated"); //just testing
    }

    componentWillUnmount() {
        console.log("unMounuted"); //just testing
    }
    handleChange = (e) => {
        this.setState({ ...this.state, tempoText: e.target.value });
    };
    handleClick = () => {
        const tasks = [...this.state.tasks];
        const id = tasks.length ? tasks[0].id + 1 : 1;
        tasks.unshift({ id, title: this.state.tempoText });
        this.setState({ tasks });
        this.setState({tempoText: ""})
        document.getElementById("input").value = "";


    };
    handleDelete = (id) => {
        const tasks = [...this.state.tasks];
        const newTasks = tasks.filter((task) => task.id !== id);
        this.setState({ tasks: newTasks });
    };

    handleUpdate = (data) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex((task) => task.id === data.id);
        tasks[index].title = data.title;
        this.setState({ tasks });
    };
    render() {
        console.log("render");
        return (
            <div>
                <h2>Hello! {this.props.title}</h2>
                <input id="input" className={style.input}   type="text" onChange={(e) => this.handleChange(e)} />
                <button className={style.add} onClick={this.handleClick}>Add</button>
                <ul>
                    {this.state.tasks.map((task) => (
                        <CounterItems
                            key={task.id}
                            task={task.title}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                            id={task.id}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Counters;
