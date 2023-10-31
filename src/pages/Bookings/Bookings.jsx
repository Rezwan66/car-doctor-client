import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  // console.log(bookings);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-umber-psi.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then(res => setBookings(res.data));

    // axios
    //   .get(url, { withCredentials: true })
    //   .then(res => {
    //     console.log(res.data);
    //     setBookings(res.data);
    //   })
    //   .catch(err => toast.error(err.message));

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
  }, [url, axiosSecure]);

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
        fetch(
          `https://car-doctor-server-umber-psi.vercel.app/bookings/${_id}`,
          {
            method: 'DELETE',
          }
        )
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
    fetch(`https://car-doctor-server-umber-psi.vercel.app/bookings/${_id}`, {
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
