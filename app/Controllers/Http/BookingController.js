'use strict'

const Booking = use('App/Models/Booking');

class BookingController {
    async book({ request, response, view, auth }) {


        const customer = await Booking.findOrCreate(request.only(['name', 'email', 'phonenumber', 'address', 'hospital']));


        //console.log(request.only(['name', 'email', 'phonenumber', 'address', 'hospital']));

        //return response.redirect('/home/booking/succeed');

        return view.render('customer.book', {
            customers: customer.toJSON()
        });
    }
}

module.exports = BookingController