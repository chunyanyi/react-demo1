import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            data: [],
        }
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

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App