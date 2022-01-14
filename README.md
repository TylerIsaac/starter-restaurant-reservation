# Periodic Tables
## Capstone: Restaurant Reservation System

#### By: Tyler Isaac
#### Demo: https://reservation-tyler-client.herokuapp.com/dashboard

> The Periodic Tables application software is a reservation system for fine dining restaurants designed for managing multiple daily and future reservations, and seating parties accordingly.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

<hr>

## Key Features

1. View all reservations for the current day, or a date in the future
1. Create and edit reservations (name, date, time, mobile-number, party-size)
1. Assign a reservation to a specific table
1. Clear a table in the system when the reservation leaves
1. Search for reservations by mobile number
1. Cancel a reservation

<hr>

## API Documentation

| Endpoint                               | Method | Description                                                                                           |
| -------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `/reservations`                        | GET    | Gets all of the reservations. |
| `/reservations`                        | POST   | Creates a new reservation.                                                                            |
| `/reservations/:reservation_id`        | GET    | Gets the reservation corresponding to 'reservation_id'.                                               |
| `/reservations/:reservation_id`        | PUT    | Updates the reservation corresponding to 'reservation_id'.                                            |
| `/reservations/:reservation_id/status` | PUT    | Updates the reservation status.                                                                       |
| `/tables`                              | GET    | Gets all of the tables.                                                                               |
| `/tables`                              | POST   | Creates a table.                                                                                      |
| `/tables/:tableId/seat`                | PUT    | Assigns a reservation to a table.                                                                     |
| `/tables/:tableId/seat`                | DELETE | Frees a table for future reservations

<hr>

## Tech

### Frontend
1. Javascript
1. React.js
1. HTML5
1. Bootstrap
1. CSS3

<hr>

## Front-end Structure - React Components Map
* __Index.js__ 
    * __App.js__ 
        * __Layout.js__ 
            * __Menu.js__ 
                * __ReservationRow.js__ 
                * __TableRow.js__ 
            * __Routes.js__ 
                * __NewReservation.js__ 
                * __SeatReservation.js__ 
                * __NewTable.js__ 
                * __Dashboard.js__ 
                * __Search.js__ 
                * __NotFound.js__ 

<hr>

## Screenshots
### DashBoard
![This is an image](/Screenshots/Dashboard.png)



### Search
![This is an image](/Screenshots/Search.png)



### New Reservation
![This is an image](/Screenshots/New-Reservation.png)



### New Table
![This is an image](/Screenshots/Newtable.png)

<hr>

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Added styling
* More options clearing table IDs from dashboard
* Customer access to online version
