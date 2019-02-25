const gulp = require('gulp');

const Gitdown = require('gitdown');
const generic = require('./configs/generic.js').generic_config();
var repo = null;


// Read the markdown file written using the Gitdown extended markdown.
// File name is not important.
// Having all of the Gitdown markdown files under ./.README/ path is the recommended convention.
const gitdown = Gitdown.readFile(__dirname + '/ContributeTemplate.md');

// If you have the subject in a string, call the constructor itself:
// gitdown = Gitdown.read('literal string');

// Get config.
gitdown.getConfig()


function WriteConfig(){
    scope_json_content = {generic, repo}

    gitdown.setConfig({
        variable: {
            scope: scope_json_content
        }
    });  
    gitdown.writeFile('./Export/Contribute.md');
}

function getRepoConfig( repoFileName ){
    repo = require('./configs/'+ repoFileName +'.js').repo_config();
}

function defaultTask(cb) {
    // place code for your default task here
    // Output the markdown file.
    // All of the file system operations are relative to the root of the repository.
    console.log("Usage: gulp `repo`. Where the definition `repo` can be found in gulpfile.js.")
    cb();
}

function usolc(cb){
    getRepoConfig('usolc');
    WriteConfig();
    cb();
}




exports.default = defaultTask
exports.usolc = usolc



