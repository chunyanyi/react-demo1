import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            data: [],
        }
    }




    handleChange2 = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm2 = event => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
             'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = event => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }





    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }


    handleChange3 = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm3 = event => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

}

export default App