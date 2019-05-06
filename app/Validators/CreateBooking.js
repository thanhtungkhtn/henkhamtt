'use strict'

class CreateBooking {
    get rules() {
        return {
            'name': 'required|unique:bookings',
            'email': 'required|unique:bookings',
            'phonenumber': 'required|unique:bookings',
            'address': 'required|unique:bookings',
            'hospital': 'required|unique:bookings',
        }
    }

    /*

    'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            // thêm validate cho các trường vừa thêm
            'address' => 'required',
            'phone' => 'required',
    */
    get messages() {
        return {
            'required': 'Woah now, {{ field }} is required.',
            'unique': 'Wait a second, the {{ field }} already exists'
        }
    }

    async fails(error) {
        this.ctx.session.withErrors(error)
            .flashAll();

        return this.ctx.response.redirect('back');
    }

}

module.exports = CreateBooking