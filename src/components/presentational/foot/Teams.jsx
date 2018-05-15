import React, { Component } from 'react';
import footService from '../../../helpers/footService';
import { Link } from 'react-router-dom';

class Teams extends Component {

    componentWillMount() {
        footService.getTeams().then(result => {
            this.setState({ data: result.data })
        });
    }

    render() {
        const data = (this.state || {}).data;
        const teams = data ? data.map((team, id) => (
            <div  key={id}>
                <Link to={"/teams/"+team.name}>{team.name}</Link>
            </div>
        )) : '';
        return (
            <section>
                {teams}
            </section>
        );
    }
}

export default Teams;
