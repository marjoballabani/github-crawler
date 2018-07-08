import axios from 'axios'

const baseURI = `https://api.github.com/repos/facebook/`

export const fetchCommits = (repo, page = 1) => ({
  type: "GET_COMMITS",
  payload: axios.get(`${baseURI}${repo}/commits?page=${page}&per_page=20`)
})

export const hideCommits = () => ({
    type: "COMMIT_DISPLAY",
  })
