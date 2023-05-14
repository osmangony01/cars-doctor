import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
    const [bookings, setBookings] = useState([]);

    const { user } = useContext(AuthContext);

    console.log(user?.email);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        alert("Deleted successful");
                        const remaining = bookings.filter(book => book._id !== id)
                        setBookings(remaining);
                    }
                   
                })
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {/* <h1 className="text-5xl">Your booking: {bookings.length}</h1> */}
                <h1 className="text-5xl mt-5">Your Booking</h1>
                <div className="overflow-x-auto w-full my-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Service</th>
                                <th>Customer Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => <BookingRow 
                            key={booking._id} 
                            booking={booking}
                            handleDelete={handleDelete}
                            ></BookingRow>)}
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;