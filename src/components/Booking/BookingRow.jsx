
const BookingRow = ({ booking, handleDelete }) => {

    const { _id, customerName, date, price, img } = booking;

    //onClick={() => handleDelete(_id)}
   

    return (
        <tr>
            <td>
                <button className="btn btn-sm btn-circle" onClick={() => handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-md">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{price}</td>
            <td>
                {date}
            </td>
            <th>
                <button className="btn btn-warning">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;