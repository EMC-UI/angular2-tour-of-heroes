# marvel heroes
Based on the Angular2 Tour of Heroes sample app using Typescript and npm

when running `npm install`, you may run into an error  - unable to find @angular.xxxx - don't panic!
This is because the local EMC npm repo does not have the angular 2 packages cached.  To fix this, just run the command
`npm config set "@angular:registry" http://registry.npmjs.org/`

This tells npm to look for the angular packages on the official npm repo registry.

To run the project, use the command 'npm start'.

The Marvel Heroes accesses Marvel's Public API - requires signup (see http://developer.marvel.com/ for details)

The design contains both heroes and comics from Marvel.
