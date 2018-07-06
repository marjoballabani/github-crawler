import axios from 'axios'

const baseURI = `https://api.github.com/repos/facebook/`

export const fetchCommits = (repo) => ({
  type: "GET_COMMITS",
  payload: axios.get(`${baseURI}${repo}/commits`)
})

export const hideCommits = () => ({
    type: "COMMIT_DISPLAY",
  })
