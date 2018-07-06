import React from 'react'
import {Share, Code } from '@material-ui/icons';

import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Repo extends React.Component {
    render() {
        return(
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={this.props.repo.created_at}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                key={this.props.repo.name}
                icon={<Code />}
            >
                <h3 className="vertical-timeline-element-title" onClick={() => this.props.fetch(this.props.repo.name)}>{this.props.repo.name}</h3>
                <h6 className="vertical-timeline-element-subtitle">{this.props.repo.description}</h6>
                <p>
                    <label className="repo-details">
                        <i className="fa fa-code-fork" aria-hidden="true"></i>
                        {this.props.repo.forks}
                    </label>
                    <label className="repo-details">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        {this.props.repo.watchers}
                    </label>
                    <label className="repo-details">
                        {this.props.repo.open_issues} issues need help
                    </label>
                    <label className="repo-details">
                        Last updated: {this.props.repo.updated_at}
                    </label>
                </p>
            </VerticalTimelineElement>
        )
    }
}

