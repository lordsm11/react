import React, { Component } from 'react';
import footService from '../../../helpers/footService';
import { Link } from 'react-router-dom';
import actions from '../../../helpers/actions';
import {connect} from "react-redux";

class Teams extends Component {

    componentWillMount() {
        footService.getTeams()
                .then(function(response){
                    actions.setTeams(response.data);
                });
    }

    render() {
        const teams = this.props.teams;
        const teamsView = teams ? teams.map((team, id) => (
            <div  key={id}>
                <Link to={"/teams/"+team.name}>{team.name}</Link>
            </div>
        )) : '';
        return (
            <section>
                {teamsView}
            </section>
        );
    }
}

export default connect(state => ({teams: state.footReducer.teams}), {})(Teams);
