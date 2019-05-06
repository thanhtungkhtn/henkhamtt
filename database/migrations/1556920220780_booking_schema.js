'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
    up() {
        this.create('bookings', (table) => {
            table.increments()
            table.string('name', 80).notNullable().unique()
            table.string('email', 80).notNullable().unique()
            table.string('phonenumber', 60).notNullable().unique()
            table.string('address', 60).notNullable().unique()
            table.string('hospital', 60).notNullable().unique()

            table.timestamps()
        })
    }

    down() {
        this.drop('bookings')
    }
}

module.exports = BookingSchema