
# Quantstamp Open Source Document Generation


## Prerequisite
* Install [Markdown-pp](https://github.com/jreese/markdown-pp#installationandusage) in your local machine.
* Make sure you can run curl.

## Create a Contribute template in your local repository

In your local repository, create a template `Contribute.mdTemplate`

### Contribute.mdTemplate reference 

```
#Contributing
!INCLUDEURL "https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/ContribHeader.md"

## Bug Report
!INCLUDEURL "https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/BugReport.md"

## Feature suggestion
!INCLUDEURL "https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/FeatureSuggestion.md"

## Pull Request Guideline
!INCLUDEURL "https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/PullRequest.md"

## Code of Conduct
!INCLUDEURL "https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/CodeOfConduct.md"
```

## Modify your Makerfile

Add a section so that the documents will be generated and pulled from this public repository using the command `make docs`.

### Makerfile reference

```
docs:
	markdown-pp Contribute.mdTemplate -o ./Contribute.md
	rm -rf .github
	mkdir .github
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/bug-report.md -o .github/bug-report.md
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/pull_request_template.md -o .github/pull_request_template.md

```


