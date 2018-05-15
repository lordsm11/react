import React, { Component } from 'react';
import Moment from 'moment';
import action from '../../../helpers/actions';

class Match extends Component {

    constructor(props) {
        super(props);
        const match = this.props.data;
        this.state = {name:match.name,edit:false, result: match.result ? match.result : '0-0'};
    }

    render() {
        const match = this.props.data;
        const editBloc = this.state.edit ?
            (
                <td>
                    <input type="text" onChange={(e) => this.setState({...this.state, result: e.target.value})}/>
                    <button type="submit" onClick={(e) => {e.preventDefault(); this.setState({...this.state, edit: !this.state.edit}); action.editScore(this.state.name,this.state.result);}}>Validate</button>
                    <button type="submit" onClick={(e) => {e.preventDefault(); this.setState({...this.state, edit: !this.state.edit});}}>Cancel</button>
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
