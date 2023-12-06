import React, { Component } from "react";
import CountItems from "./CountItems";

class Count extends Component {
    state = {
        counters: [],
        counterItem: "",
    };

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            
            data.reverse()
            this.setState({counters :  data})
            
        })
    }

    handleChange = (e) => {
        this.setState({ counterItem: e.target.value });
    };

    handleClick = () => {
        const counters = this.state.counters;
        const id = counters.length ? counters[0].id + 1 : 1;
        counters.unshift({ id, title: this.state.counterItem });
        this.setState({ counters });
        document.getElementById("input").value = "";
    };

    handleDelete = (id) => {
        const counters = [...this.state.counters];
        const counter = counters.filter((counter) => counter.id !== id);
        this.setState({ counters: counter });
    };

    handleUpdate = (id, text) => {
        const counters = [...this.state.counters];
        // this is so important coz of map() only updates not return a new array  but return a undefined arrays
        // not using return value of map() === forEach()
        counters.forEach(counter => {                   
            if (counter.id === id) {                    
                counter.title = text;
            }
        });
        this.setState(counters)
    };

    render() {
        return (
            <div>
                <h1>Hello , {this.props.title}</h1>
                <input type="text" onChange={this.handleChange} id="input"/>
                <button
                    style={{ fontWeight: "bold", background:"green", color:"white"}}
                    onClick={this.handleClick}
                >
                    Enter
                </button>

                {this.state.counters.map((counter) => (
                    <CountItems
                        key={counter.id}
                        title={counter.title}
                        id={counter.id}
                        handleDelete={this.handleDelete}
                        handleUpdate={this.handleUpdate}
                    />
                ))}
                
            </div>
        );
    }
}

export default Count;
