## Volz

## TLDR Instructions

To setup the appplication

```
make ansible
```

For available commands

```
make tldr
```

## Available Scaffolds

```
make html
make rails
make vite
make node
make astro
make formik
```

## Instructions

Volz is an application scaffolder that scaffolds rails/react applications, vite/react applications, and html/css/js applications. By default it will output the application in the dist directory of this repo. However it can be run from anywhere in your file system by setting up the following zsh or bash function

```bash
volz () {
  local volzloc=$HOME/live/volz
  make -f $volzloc/Makefile $1 -C $volzloc CURDIR=$(pwd)
  cd $(ls -t |head -1)
}
```

Where $volzloc is the location of the cloned repo. Then the commmands will be run with volz instead of make, eg `volz rails` or `volz html`. If run from anywhere other than the repo location it will output into a newly created directory but without the dist. If run from the repo location the newly created directory will be output into the dist folder instead.

### Rails

Volz will create a Ruby on Rails application with React using esbuild, ready for deployment via github action to a dokku host.

### Vite

Volz will create a Vite application with React

### HTML

Volz will create a barebones index.html, styles,css and script.js

### Node

Volz will create a hello world app with postgres

### Git/GitHub

Volz sets up a test workflow and release workflow with conventional changelog action included. For Rails applications a dokku workflow is also created



## Built With

- Ansible
- Make
