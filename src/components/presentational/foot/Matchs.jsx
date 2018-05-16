import React, { Component } from 'react';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import actions from '../../../helpers/actions';
import Match from './Match';


class Matchs extends Component {

    render() {
        const { handleSubmit} = this.props;
        const matchs = this.props.matchs;
        if(matchs){
            const matchsView = matchs.map((match, id) => (<Match key={id} name={match.name}/>));
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

const onSubmit = (values, dispatch) => {
    dispatch(actions.editScore());
};

const strMapToObj = (strMap)  => {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
};

const initFormValues = (matchs) => {
    if(matchs) {
        var matchsMap = new Map();
        matchs.map((match) => matchsMap.set('result_'+match.name,match.result));
        return strMapToObj(matchsMap);
    }
};

Matchs = reduxForm({
    form: 'editScoreForm',
    onSubmit
})(Matchs);

Matchs = connect(
        state => ({
            initialValues: initFormValues(state.productsComponent.matchs)
        }), {}
)(Matchs);

export default Matchs





