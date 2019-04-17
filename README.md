
# Quantstamp Open Source Document Generation

## Prerequisite
* Install [Markdown-pp](https://github.com/jreese/markdown-pp#installationandusage) in your local machine. (`pip install MarkdownPP`)
* Make sure you can run curl.

## Create a Contribute template in your local repository

In your local repository, create a template `Contribute.mdTemplate`

### Template reference 

All the full templates for local repositories are located in github_template/xxx.md/xxx.mdTemplate.


For convenience, here are the list of the full templates.
* [Contribute.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/Contribute.md/Contribute.mdTemplate) 
* [bug-report.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/bug-report.md/bug-report.mdTemplate)
* [pull_request_template.mdTemplate](https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/github_template/pull_request_template.md/pull_request_template.mdTemplate)

## Modify your Makerfile

Add a section so that the documents will be generated and pulled from this public repository using the command `make docs`.

### Makefile reference

```
docs:
	markdown-pp Contribute.mdTemplate -o ./Contribute.md
	mkdir -p .github
	mkdir -p .github/ISSUE_TEMPLATE
	markdown-pp bug-report.mdTemplate -o ./.github/ISSUE_TEMPLATE/bug-report.md
	markdown-pp pull_request_template.mdTemplate -o ./.github/pull_request_template.md
	curl https://raw.githubusercontent.com/quantstamp/opensource-doc-gen/master/CodeOfConduct.md > .github/CODE_OF_CONDUCT.md

```


