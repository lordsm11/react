import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import Matchs from './Matchs';
import actions from "../../../helpers/actions";
import {connect} from "react-redux";

class TeamDetail extends Component {

    componentWillMount() {
        const teamId = this.props.match.params.teamId;
        footService.getMatchsByTeam(teamId)
            .then(function(response){
                actions.updateMatchs(response.data);
            });
    }


    render() {
        const matchs = this.props.matchs;
        return <Matchs matchs={matchs}/>;
    }
}

const mapStateToProps = state => ({
    matchs: state.productsComponent.matchs
});

export default connect(mapStateToProps)(TeamDetail);
