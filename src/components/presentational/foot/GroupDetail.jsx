import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Matchs from './Matchs';

class GroupDetail extends Component {

    componentWillMount() {
        const groupId = this.props.match.params.groupId;
        footService.getMatchsByGroup(groupId).then(result => {
            this.setState({ matchs: result.data })
        });
    }

    render() {
        const matchs = (this.state || {}).matchs;
        return <Matchs matchs={matchs}/>;
    }
}

export default GroupDetail;
