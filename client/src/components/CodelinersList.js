import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CodelinersList extends Component {
    state = {
        error: '',
        codeliners: []
    }

    componentDidMount(){
        this.fetchCodeliners()
    }

    fetchCodeliners = async () => {
        try {
            const res = await axios.get('/api/codelines')
            this.setState({ codeliners: res.data })
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Codelines</h1>
                {this.state.codeliners.map(codelines => (
                    <div key={codelines.id}>
                    <Link to={`/codelines/${codelines.id}`}>{codelines.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default CodelinersList;