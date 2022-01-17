import ReservationRow from "../dashboard/ReservationRow";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { searchReservation } from "../utils/api";

/**
 * Defines the create reservation page.
 * @param today date of today
 * @param updateDate function to update date displayed on dashboard
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */

function SearchReservation() {
  const initialFormState = {
    mobile_number: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [reservationsError, setReservationsError] = useState(null);
  const [reservations, setReservations] = useState([]);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setReservationsError(null);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  async function handleSubmit(event) {
    setReservationsError(null);
    event.preventDefault();
    try {
      const abortController = new AbortController();

      const searchResults = await searchReservation(
        formData,
        abortController.signal
      );

      if (searchResults.length) {
        setReservations(searchResults);
      } else {
        setReservations([]);
        throw new Error("No reservations found");
      }
    } catch (error) {
      setReservationsError(error);
    }
  }

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <div>
      <form>
        <ErrorAlert error={reservationsError} />

        <label className="form-label" htmlFor="mobile_number">
          Enter a customer's phone number:
        </label>
        <input
          className="form-control"
          type="tel"
          id="mobile_number"
          name="mobile_number"
          required
          minLength="1"
          axLength="15"
          value={formData.mobile_number}
          onChange={handleChange}
          placeholder="555-555-1234"
        />
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-secondary m-1 rounded-pill"
        >
          Cancel
        </button>
        <button
          className="btn btn-primary m-1"
          type="submit"
          onClick={handleSubmit}
        >
          Find
        </button>
      </form>

      <table className="table table-hover m-1">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">People</th>
            <th scope="col">Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Cancel</th>
            <th scope="col">Seat</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map((reservation) => (
            <div className="" key={reservation.reservation_id}>
              <ReservationRow reservation={reservation} />
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchReservation;
