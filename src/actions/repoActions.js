import axios from 'axios'

const baseURI = "https://api.github.com/users/facebook/repos"

export const fetchRepos = () => ({
  type: "GET_REPO",
  payload: axios.get(baseURI)
})

export const selectRepo = (repo) => ({
  type: "SELECT_REPO",
  selected: repo
})


