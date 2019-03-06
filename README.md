
# Quantstamp Open Source Document Generation


## Prerequisite
* Install [Markdown-pp](https://github.com/jreese/markdown-pp#installationandusage)
* Make sure you can rune curl.

## Makerfile reference

```
docs:
	markdown-pp Contribute.mdTemplate -o ./Contribute.md
	rm -rf .github
	mkdir .github
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/bug-report.md -o .github/bug-report.md
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/pull_request_template.md -o .github/pull_request_template.md

```

## Contribute.mdTemplate reference 

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

