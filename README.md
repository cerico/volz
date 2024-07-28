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
make railsreact
make graphql
```

## Instructions

Volz is an application scaffolder that scaffolds rails/react applications, vite/react applications, and html/css/js applications. By default it will output the application in the dist directory of this repo.

However it can be run from anywhere in your file system by adding it to your `.bashrc` or `.zshrcz with

```bash
make shell
```

This will add the following function to your shell


```bash
volz () {
  local volzloc=$HOME/live/volz
  make -f $volzloc/Makefile $1 -C $volzloc CURDIR=$(pwd)
}
```

And now the volz scaffolder can be ruin from anywhere insteade of into the dist directory of the repo

### Rails

Volz will create a Ruby on Rails application with React using esbuild, ready for deployment via github action to a dokku host.

### Vite

Volz will create a Vite application with React

### HTML

Volz will create a barebones index.html, styles,css and script.js

### Node

Volz will create a hello world app with postgres

### Formik

Volz will create a react application, with formik, hocs, react-router, redux, leaflet, and context api

### RailsReact

Volz will create a rails/react application, with formik hocs, react-router, redux, leaflet, and context api

### GraphQL

Volz will extend the rails/react application with GraphQL

### Git/GitHub

Volz sets up a test workflow and release workflow with conventional changelog action included. For Rails applications a dokku workflow is also created

## Built With

- Ansible
- Make
