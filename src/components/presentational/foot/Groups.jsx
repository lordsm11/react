import React, { Component } from 'react';
import footService from '../../../helpers/footService';
import { Link } from 'react-router-dom';

class Groups extends Component {

    componentWillMount() {
        footService.getGroups().then(result => {
            this.setState({ data: result.data })
        });
    }

    render() {
        const data = (this.state || {}).data;
        const groups = data ? data.map((group, id) => (
            <div>
                <Link to={"/groups/"+group.id} key={group.id}>{group.name}</Link>
            </div>
        )) : '';
        return (
            <section>
                {groups}
            </section>
        );
    }
}

export default Groups;
