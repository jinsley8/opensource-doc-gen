
# Quantstamp Open Source Document Generation


## Installation
1. Clone the repo
2. In the directory, run: `npm install gulp` and `npm install gitdown`

## Usage
Run `gulp repoName` in the repo Folder to generate files in the folder `Export`. 
For example, to generate `Contribute.md` for `usolc` simply type `gulp usolc`.

## Adding a new Repo config
1. Create a `reponame.js` in the folder `configs`, and fill all the variables required by the template. 

2. Modify `gulpfile.js`, create a function that would read config from the created file and export the function in gulp. Example:

```javascript
function usolc(cb){
    getRepoConfig('usolc');
    WriteConfig();
    cb();
}

exports.usolc = usolc
```
