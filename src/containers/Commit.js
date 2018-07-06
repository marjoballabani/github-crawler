import React from 'react'

export default class Commit extends React.Component {
    render() {
        return(
            <div className="commit-tile">
                <svg class="octicon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        stroke="#6a737d"
                        fill="#6a737d"
                        d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z">
                    </path>
                </svg>
                <label className="commit-title">{this.props.commit.commit.message}</label>
                <div>
                    <img src={this.props.commit.commit.author.avatar_url || "https://help.github.com/assets/images/help/profile/identicon.png"} />
                    <label>{this.props.commit.commit.author.name}</label>
                </div>
            </div>

        )
    }
}
