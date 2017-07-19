# wayfarer2: deployed at https://wayfarer2.herokuapp.com/

A React app initially created as a team project in GA WDI-27. 
I've gone on to revamp the entire front-end, added parallax 3d effect, and updated database models and components to incorporate user info from firebase. 


deploying react front end: https://github.com/mars/create-react-app-buildpack

    heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git

Procfile contains: web: react-scripts start

adding another domain to firebase oauth: https://console.firebase.google.com, https://stackoverflow.com/questions/37344066/firebase-this-domain-is-not-authorized


