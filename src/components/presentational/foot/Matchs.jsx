import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import actions from '../../../helpers/actions';
import Match from './Match';


class Matchs extends Component {

    render() {
        const { handleSubmit} = this.props;
        const matchs = this.props.matchs;
        if(matchs){
            const matchsView = matchs.map((match, id) => (<Match key={id} match={match}/>));
            return (
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>{matchsView}</tbody>
                        </table>
                        <button type="submit">Ok</button>
                    </form>
            );
        }
        return '';
    }
}

const onSubmit = (values, dispatch,rtt) => {
    console.log(values);
    console.log(rtt);
    dispatch(actions.editScore(1,values.result));
};

export default reduxForm({
    form: 'editScoreForm',
    onSubmit
})(Matchs);






