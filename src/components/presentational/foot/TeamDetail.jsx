import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Matchs from './Matchs';

class TeamDetail extends Component {

    componentWillMount() {
        const teamId = this.props.match.params.teamId;
        footService.getMatchsByTeam(teamId).then(result => {
            this.setState({ matchs: result.data })
        });
    }


    render() {
        const matchs = (this.state || {}).matchs;
        return <Matchs matchs={matchs}/>;
    }
}

export default TeamDetail;
