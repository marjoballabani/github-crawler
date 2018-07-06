import React from 'react'
import {connect} from 'react-redux'
import '../commits.css';
import {hideCommits} from '../actions/commitActions'
import Commit from '../containers/Commit'

class Commits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        }
    }
    handleChanges(event) {
        this.setState({filter: event.target.value})
    }

    render() {
        return(
            [
            <div className="mask"
                onClick={this.props.hideCommits}style = {!this.props.commits.display ? {display:"none"} : {}}
            >
            </div>,
            <div className="col-md-4 commits-container animated slideInRight" style = {!this.props.commits.display ? {display:"none"} : {}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Commits</a>
                    <form className="col-md-10">
                        <input
                            className="form-control mr-sm-2"
                            type="search" placeholder="Search"
                            aria-label="Search" value={this.state.filter}
                            onChange={this.handleChanges.bind(this)}/>
                    </form>
                </nav>
                {
                    this.props.commits.display &&
                    <div className="commit-sidebar row">
                    {
                        this.props.commits.list.filter((commit => {
                            return commit.commit.message.toLocaleLowerCase().indexOf(this.state.filter.toLocaleLowerCase()) > -1
                        })).map((commit) => {
                            return <Commit commit={commit} />
                        })
                    }
                    </div>
                }
            </div>
            ]
        )
    }
}

const mapStateToProps = (state) => ({
    commits: state.commits
})

export default connect(
    mapStateToProps,
    {hideCommits: hideCommits}
)(Commits)
