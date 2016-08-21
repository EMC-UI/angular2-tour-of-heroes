# angular2-tour-of-heroes
Angular2 Tour of Heroes sample app using Typescript and Angular-cli

see https://angular.io/docs/ts/latest/quickstart.html for guidance on the npm setup

docs for the tour of heroes https://angular.io/docs/ts/latest/tutorial/

when running `npm install`, you may run into an error  - unable to find @angular.xxxx - don't panic!
This is because the local emac npm repo does not have the angular 2 packages cached.  To fix this, just run the command
`npm config set "@angular:registry" http://registry.npmjs.org/`

This tell npm to look for the angular packages on the official npm repo registry.
