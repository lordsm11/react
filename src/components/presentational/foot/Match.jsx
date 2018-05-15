import React, { Component } from 'react';
import Moment from 'moment';

import { Field } from 'redux-form';
import validatorHelper from '../../../helpers/validatorHelper';


class Match extends Component {

    constructor(props) {
        super(props);
        const match = this.props.match;
        this.state = {name:match.name,edit:false, result: match.result ? match.result : '0-0'};
    }

    render() {
        const match = this.props.match;
        const name = "result_"+match.name;
        const editBloc = this.state.edit ?
            (
                <td>
                    <Field name={name} type="text" component={validatorHelper.renderSimpleField} label="Result"/>
                </td>
            ) :
            (
                <td>
                    <button type="submit" onClick={(e) => {e.preventDefault(); this.setState({...this.state, edit: !this.state.edit});}}>Edit</button>
                </td>
            );

        return (
            <tr key={match.id}>
                <td>{match.firstTeam}</td>
                <td>{match.secondTeam}</td>
                <td>{Moment(match.startDate).format('DD/MM/YYYY')}</td>
                <td>{this.state.result}</td>
                {editBloc}
            </tr>
        );

    }
}

export default Match;
