import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Match from './Match';

class GroupDetail extends Component {

    componentWillMount() {
        const groupId = this.props.match.params.groupId;
        footService.getMatchsByGroup(groupId).then(result => {
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

export default GroupDetail;
