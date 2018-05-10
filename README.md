# LendingLibrary


This project was significantly more complex than anticipated and despite dozens of hours of work and a couple sleepless nights towards the end, it did not come together as I had hoped.  I bit of WAY more than I could chew.  

The original intent was to use Ember, since I had read that it was easier to learn.  However after spending a couple of days starting down that path, I discovered that there were far more resources available for Angular and changed to using that as my framework.  For the back end I set up a local instance of a MySQL server with a RESTful API using DreamFactor.  The goal was to use their free tier of cloud hosting to allow the LendingLibrary app to be deployed anywhere and access the database through the API.  While this worked well setting this up on my local, the hosted database would not work, despite a couple hours spent talking with their tech support.  So unfortunately without more time to learn Node.JS (in addition to Angular and TypeScript), this project will have to live only on my local.

The video screen cast of the app in action on my local can be can be found at https://youtu.be/5IjKElSjWvM



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
