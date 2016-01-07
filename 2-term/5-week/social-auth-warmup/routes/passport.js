var passport = require('passport');



//
// var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
//
// passport.use(new LinkedInStrategy({
//   clientID: process.env.LINKEDIN_CLIENT_ID,
//   clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//   callbackURL: process.env.HOST + "/auth/linkedin/callback",
//   scope: ['r_emailaddress', 'r_basicprofile'],
//   state: true
// }, function(accessToken, refreshToken, profile, done) {
//   // asynchronous verification, for effect...
//   process.nextTick(function () {
//     // To keep the example simple, the user's LinkedIn profile is returned to
//     // represent the logged-in user. In a typical application, you would want
//     // to associate the LinkedIn account with a user record in your database,
//     // and return that user instead.
//     return done(null, {id: profile.id, displayName: profile.displayName, token: accessToken});
//   });
// }));
//
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user)
// });
