console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "This is Some Text",
    options: []
};

//Reference these functions don't call with ()
const onFormSubmit = (e) => {
    //Stops full page reset
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderIndecision();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderIndecision();
};

const onMakeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const option = app.options[rand];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderIndecision = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button> 
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecision();
