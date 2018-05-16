import React, { Component } from 'react';
import footService from "../../../helpers/footService";
import actions from "../../../helpers/actions";

import Matchs from './Matchs';
import {connect} from "react-redux";

class GroupDetail extends Component {

    componentWillMount() {
        const groupId = this.props.match.params.groupId;
        footService.getMatchsByGroup(groupId)
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

export default connect(mapStateToProps)(GroupDetail);
