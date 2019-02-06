import React, { Component } from 'react';
import axios from 'axios';

class Codeliners extends Component {
    state = {
        name: '',
        snippets: []
    }
    componentDidMount() {
        const codelineId = this.props.match.params.id
        this.fetchCodeline(codelineId)
    }

    fetchCodeline = async (codelineId) => {
        try {
            const codelinesResponse = await axios.get(`/api/codelines/${codelineId}`)
            await this.setState({
                name: codelinesResponse.data.name,
                snippets: codelinesResponse.data.snippets
            })
        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {this.state.snippets.map(snippet => (
                    <div key={snippet.id}>
                    <h4>{snippet.snippet}</h4>
                    </div>
                ))}
            </div>
        );
    }
}

export default Codeliners;