'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {

    Route.on('/').render('index')

    Route.on('/signup').render('auth.signup');
    Route.on('/login').render('auth.login');
    Route.post('/signup', 'UserController.create').validator('CreateUser');

    Route.get('/logout', async({ auth, response }) => {
        await auth.logout();
        return response.redirect('/home');
    });

    Route.post('/login', 'UserController.login').validator('LoginUser');

    Route.on('/admin').render('Admin.admin');

    // Route.on('/booking/succeed').render('customer.book');
    Route.post('/booking', 'BookingController.book').validator('CreateBooking');

}).prefix('/home');

Route.group(() => {
    Route.get('/dskhdki', 'UserController.showinfoDK');
    Route.get('/ctkh', 'UserController.showinfoDetail');
}).prefix('/home/admin');