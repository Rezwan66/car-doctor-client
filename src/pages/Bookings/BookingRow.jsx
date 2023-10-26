const BookingRow = ({ booking, handleDelete, handleConfirmBooking }) => {
  const { _id, customerName, date, email, img, service, price, status } =
    booking || {};

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {status === 'confirm' ? (
          <button className="btn btn-success btn-xs">Confirmed</button>
        ) : (
          <button
            onClick={() => handleConfirmBooking(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm booking
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
