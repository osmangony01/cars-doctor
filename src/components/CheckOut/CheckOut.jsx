import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const CheckOut = () => {

    const { user } = useContext(AuthContext);

    const loadService = useLoaderData();
    const { _id, title, price, img } = loadService;

    console.log(loadService);

    const handleBookService = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;

        console.log(name, email, date, price);
        const order = {
            customerName: name,
            email,
            date,
            service_id: _id,
            price: price,
            img: img
        }
        console.log(order)
        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Booking is Successful');
                }
            })
    }

    return (

        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Book Service: {title}</h2>
            <form action="" onSubmit={handleBookService}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$ ' + price} className="input input-bordered" />
                    </div>

                </div>
                <div className="mt-6">
                    <input type="submit" className="btn btn-primary btn-block" value="Order Confirm" />
                </div>
            </form>
            <Footer></Footer>
        </div>

    );
};

export default CheckOut;