import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        alert(option);
    }

    //Must be exactly this spelling
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
                console.log("Fetching Data");
            }
        } catch(e) {
            //Do nothing if invalid data
        }
    }

    //Same
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("Saving Data");
        }
    }

    //Same
    componentWillUnmount() {
        console.log("App Will Unmount")
    }

    render() {
        const title = "Indecision App";
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
