import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Moment from 'moment';

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
            <tr key={id}>
                <td>{match.firstTeam}</td>
                <td>{match.secondTeam}</td>
                <td>{Moment(match.startDate).format('DD/MM/YYYY')}</td>
            </tr>
        )) : '';
        return (
            <section>
                {matchs}
            </section>
        );

    }
}

export default TeamDetail;
