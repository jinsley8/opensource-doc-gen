
# Quantstamp Open Source Document Generation

## Prerequisite
* Install [Markdown-pp](https://github.com/jreese/markdown-pp#installationandusage) in your local machine. (`pip install MarkdownPP`)
* Make sure you can run curl.

## Create a Contribute template in your local repository

In your local repository, create a template `Contribute.mdTemplate`

### Template reference 

All the full templates for local repositories are located in github_template/xxx.md/xxx.mdTemplate.


For convenience, here are the list of the full templates.
* [CONTRIBUTE.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/CONTRIBUTE.md/CONTRIBUTE.mdTemplate) 
* [bug_report.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/bug_report.md/bug_report.mdTemplate)
* [pull_request_template.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/pull_request_template.md/pull_request_template.mdTemplate)


```
curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/CONTRIBUTE.md/CONTRIBUTE.mdTemplate > CONTRIBUTE.mdTemplate
curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/bug_report.md/bug_report.mdTemplate > bug_report.mdTemplate
curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/pull_request_template.md/pull_request_template.mdTemplate > pull_request_template.mdTemplate
```


## Modify your Makerfile

Add a section so that the documents will be generated and pulled from this public repository using the command `make docs`.

### Makefile reference

```
docs:
	markdown-pp ./.github/CONTRIBUTE.mdTemplate -o ./CONTRIBUTE.md
	mkdir -p .github/ISSUE_TEMPLATE
	markdown-pp ./.github/bug_report.mdTemplate -o ./.github/ISSUE_TEMPLATE/bug_report.md
	markdown-pp ./.github/pull_request_template.mdTemplate -o ./.github/pull_request_template.md
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/CODE_OF_CONDUCT.md > .github/CODE_OF_CONDUCT.md
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/feature_request.md > .github/ISSUE_TEMPLATE/feature_request.md
```


