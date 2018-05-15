import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Match from './Match';
class TeamDetail extends Component {

    componentWillMount() {
        const teamId = this.props.match.params.teamId;
        footService.getMatchsByTeam(teamId).then(result => {
            this.setState({ data: result.data })
        });
    }

    render() {
        const data = (this.state || {}).data;
        const matchs = data ? data.map((match, id) => (
            <Match key={id} data={match}/>
        )) : '';
        return (<table><tbody>{matchs}</tbody></table>);
    }
}

export default TeamDetail;
