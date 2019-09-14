import React from 'react';
import './MultySelect.css';

class ListItem extends React.Component {
    render() {
        return (
            <ul>
                <li onClick={this.props.suggestionSelected}>{this.props.text}</li>
            </ul>
        )
    }
}

class SelectedElements extends React.Component {
    render() {
        return (
            <button className="elementBtn" onClick={this.props.deleteElement}>
                {this.props.item}
                <span className="cross">&#10008;</span>
            </button>
        )
    }
}

export default class MultySelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: "",
            selectedElements: [],
            listOfItems: this.props.listOfItems,
        };
    }

    deleteElement = (i) => {
        let suggestions = this.state.suggestions;
        const selectedElements = this.state.selectedElements;
        const listOfItems = this.state.listOfItems;

        if (listOfItems.includes(selectedElements[i]) === false) {        // 2 пункт доп. задания
            listOfItems.push(selectedElements[i]);
        }

        suggestions.push(selectedElements[i]);
        selectedElements.splice(i, 1);

        const value = document.getElementById("input").value;

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = suggestions.sort().filter(v => regex.test(v));
        } else {
            suggestions = [];
        }
        this.setState({
            selectedElements: selectedElements,
            suggestions: suggestions,
            listOfItems: listOfItems,
        });
    };

    eachElement = (item, i) => {
        return (
            <SelectedElements key={i} item={item} deleteElement={() => this.deleteElement(i)}/>
        )
    };

    suggestionSelected = (text, index) => {
        const selectedElements = this.state.selectedElements;
        selectedElements.push(text);
        this.setState({
            selectedElements: selectedElements,
            suggestions: this.state.suggestions.filter((item, i) => i !== index),
        });
    };

    handleKeyDown = (e) => { // доп. задание
        const selectedElements = this.state.selectedElements;
        const text = this.state.text;
        const suggs = this.state.suggestions;

        // 4 пункт доп. задания (при вводе Апельсин, мандарин, киви)
        if (text.includes(",") && !text.includes("\"") && e.key === "Enter") {
            let splitText = text.split(", ");

            for (let i = 0; i < splitText.length; i++) {
                if (!selectedElements.includes(splitText[i])) {
                    selectedElements.push(splitText[i]);
                }
            }

            this.setState({
                selectedElements: selectedElements
            });
        }

        // 4 пункт доп. задания (при вводе Университет, "Школа, Детский сад", Колледж)
        else if (text.includes("\"") && e.key === "Enter") {
            let splitText = text.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/gm);

            for (let i = 0; i < splitText.length; i++) {
                if (!selectedElements.includes(splitText[i])) {
                    selectedElements.push(splitText[i]);
                }
            }

            this.setState({
                selectedElements: selectedElements
            });
        }

        // 1 пункт доп. задания
        else if (suggs.length === 0 && text.length !== 0 && e.key === "Enter" && !selectedElements.includes(text)) {
            selectedElements.push(text);
            this.setState({
                selectedElements: selectedElements
            });
        }

        // 3 пункт доп. задания
        else if (text.length === 0 && e.key === "Backspace") {
            selectedElements.splice(selectedElements.length-1, 1);
            this.setState({
                selectedElements: selectedElements,
            });
        }
    };

    onTextChanged = (e) => {
        const {listOfItems} = this.props;
        const value = e.target.value;
        const selectedElements = this.state.selectedElements;

        let suggestions = [];
        suggestions = listOfItems;

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");

            let i = 0;
            do {
                suggestions = suggestions.sort().filter (
                    v => regex.test(v) && v !== selectedElements[i]
                );
                i++;
            }
            while (i < selectedElements.length)

        } else {
            suggestions = [];
        }

        this.setState(() => ({suggestions, text: value}));
    };

    renderSuggestions = () => {
        const {suggestions} = this.state;

        if (suggestions.length === 0) {
            return null;
        }

        if (this.state.suggestions) {
            return (
                this.state.suggestions.map((item, i) => (
                    <ListItem
                        items={this.state.listOfItems}
                        selectedElements={this.state.selectedElements}
                        key={i}
                        text={item}
                        suggestionSelected={() => this.suggestionSelected(item, i)}
                    />
                ))
            );
        }
    };

    render() {
        const {text} = this.state;

        return (
            <div className="MultySelect">
                <div className="buttons">
                    {this.state.selectedElements.map(this.eachElement)}
                </div>
                <input id="input" value={text} onChange={this.onTextChanged} onKeyDown={this.handleKeyDown} type="text"/>
                {this.renderSuggestions()}
            </div>
        )
    }
}