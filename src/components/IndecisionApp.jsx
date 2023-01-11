import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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
        this.setState(() => ({ selectedOption: option }));
    }

    handleClearSelected = () => {
        this.setState(() => ({selectedOption: undefined}))
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
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                  <div className='widget'>
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                  </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelected={this.handleClearSelected}
                />
            </div>
        );
    }
}
