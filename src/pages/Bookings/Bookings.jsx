import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import axios from 'axios';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  // console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch(err => toast.error(err.message));

    // axios
    //   .get(url, { withCredentials: true })
    //   .then(res => {
    //     console.log(res.data);
    //     setBookings(res.data);
    //   })
    //   .catch(err => toast.error(err.message));

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     // console.log(data);
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remaining = bookings.filter(b => b._id !== _id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleConfirmBooking = _id => {
    console.log(_id);
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirmed' }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          toast.success('Booking confirmed!!!');
          // changed status in the ui
          const remaining = bookings.filter(b => b._id !== _id);
          const updated = bookings.find(b => b._id === _id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Your Bookings: {bookings.length}
      </h2>
      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Action</th>
                <th>Service</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(booking => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirmBooking={handleConfirmBooking}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
