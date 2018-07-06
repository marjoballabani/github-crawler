# Github Crawler

## Required

- [x] Use redux as Flux-framework.
- [x] Use at least 3 new features from ES6, ES7, es2015, esnext - or whatever it may be called
today. Add a comment why you have used the feature
  - Spread syntax
    ```javascript
        {
            ...state,
            status: "pending"
        }
        // It is easy to get all properties of an object
      ```
  - Arrow functions
    ```javascript
        const fetchRepos = () => ({
          type: "GET_REPO",
          payload: axios.get(baseURI)
        })
        // Shorthand way to declare functions
        // this way no need to bind this
      ```
  - String interpolation
    ```javascript
        payload: axios.get(`${baseURI}${repo}/commits`)
        // Cleaner code and more understandable
      ```
- [x] Use bootstrap (or similar framework)
- [x] Style it!
  - ![](https://preview.ibb.co/foxLrd/style1.png)
  - ![](https://preview.ibb.co/dXLJcJ/style2.png)

## Implemented scenarios

- [x] **Connect to the Github API**
- [x] **Load last commits**
- [x] **Add a search for commit messages**
- [x] **Add a search for commit messages**
- [] **Endless scrolling**
