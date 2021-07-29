class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibity = this.handleToggleVisibity.bind(this);
        this.state = {
            visible: false
        };
    }
    handleToggleVisibity() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visible</h1>
                <button onClick={this.handleToggleVisibity}>{this.state.visible ? "Hide Details" : "Show Details"}</button>
                {this.state.visible && (
                    <div>
                        <p>Some Details</p>
                    </div>
                )}
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// let clicked = false;
// const onDetails = () => {
//     clicked = !clicked;
//     renderVis();
// };

// const appRoot = document.getElementById('app');

// const renderVis = () => {
//     const jsx = (
//         <div>
//             <h1>Vis Toggle</h1>
//             <button onClick={onDetails}>{clicked ? "Hide Details" : "Show Details"}</button>
//             {clicked && (
//                 <div>
//                     <p>"Some Details"</p>
//                 </div>
//                 )}
//         </div>
//     );
//     ReactDOM.render(jsx, appRoot);
// };

// renderVis();