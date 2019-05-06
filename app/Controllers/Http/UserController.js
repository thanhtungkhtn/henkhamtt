'use strict'
const User = use('App/Models/User');
const Booking = use('App/Models/Booking');
const Database = use('Database')

class UserController {

    async create({ request, response, auth }) {
        //const username = await request.input('username');
        //const email = await request.input('email');
        //const password = await request.input('password');

        const user = await User.findOrCreate(request.only(['username', 'email', 'password']));

        try {
            await auth.check(); //Nguoi dung da dang nhap he thong
        } catch (error) {
            await auth.remember(true).login(user);
        }
        return response.redirect('/home');
    }

    async login({ request, auth, response, session }) {
        const { email, password } = request.all();
        //console.log(email);
        try {
            await auth.attempt(email, password);
            const admin = await User.query().where('email', email).first();
            return response.redirect('/home/admin');
        } catch (error) {
            session.flash({ loginError: 'These credentials do not work.' })
            return response.redirect('/home/login');
        }
    }

    /*
    Ví dụ chúng ta muốn chỉ admin mới được đăng nhập hệ thống

    if (Auth::attempt(['email' => $email, 'password' => $password, 'role' => 1])) {
    // email admin mới được xác thực thành công
    }
    */
    async showinfoDK({ request, view, response, session }) {
        try {

            const customer = await Booking.query().fetch();
            console.log(customer);
            return view.render('Admin.dsdk', {
                customers: customer.toJSON()
            });
        } catch (error) {
            session.flash({ loginError: 'These do not work.' });
            return response.redirect('/home');
        }

    }
    async showinfoDetail({ request, view, response, session }) {
        try {

            const customer = await Booking.query().fetch();
            console.log(customer);
            return view.render('Admin.cusDetail', {
                customers: customer.toJSON()
            });
        } catch (error) {
            session.flash({ loginError: 'These do not work.' });
            return response.redirect('/home');
        }

    }

}

module.exports = UserController