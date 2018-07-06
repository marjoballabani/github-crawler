import React from 'react'
import {connect} from 'react-redux'
import {fetchRepos} from '../actions/repoActions'
import {fetchCommits} from '../actions/commitActions'
import {Share, Code } from '@material-ui/icons';

import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Repo from '../containers/Repo'

class Repos extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchRepos()
    }
    render() {
        return(
            <VerticalTimeline>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<Share />}
                />
                {this.props.repos.list.map((repo) => {
                    return <Repo repo={repo} fetch={this.props.fetchCommits}/>

                })}
            </VerticalTimeline>
        )
    }
}

const mapStateToProps = (state) => ({
    repos: state.repos
})

export default connect(
    mapStateToProps,
    {fetchRepos: fetchRepos, fetchCommits: fetchCommits}
)(Repos)
