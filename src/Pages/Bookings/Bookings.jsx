// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

// const Bookings = () => {
//     const { user } = useContext(AuthContext);
//     const [bookings, setBookings] = useState([]);

//     const uri = `http://localhost:5000/bookings?email=${user?.email}`;

//     useEffect(() => {
//         if (user?.email) {
//             fetch(uri)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log("Fetched bookings:", data);
//                     setBookings(data);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching bookings:", error);
//                 });
//         }
//     }, [user?.email]);

//     // Handle delete booking
//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
//         if (confirmDelete) {
//             fetch(`http://localhost:5000/bookings/${id}`, {
//                 method: 'DELETE',
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         const remaining = bookings.filter(booking => booking._id !== id);
//                         setBookings(remaining); // Update state after deletion
//                     }
//                 });
//         }
//     };

//     // Handle toggle booking status
//     const toggleStatus = (id, currentStatus) => {
//         const updatedStatus = currentStatus === 'Pending' ? 'Confirmed' : 'Pending';
//         fetch(`http://localhost:5000/bookings/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ status: updatedStatus })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount > 0) {
//                     const updatedBookings = bookings.map(booking =>
//                         booking._id === id ? { ...booking, status: updatedStatus } : booking
//                     );
//                     setBookings(updatedBookings); // Update state after status change
//                 }
//             });
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-2xl font-semibold mb-6">All Bookings</h2>
//             {bookings.length > 0 ? (
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white border border-gray-200 table-auto block md:table">
//                         <thead className="block md:table-header-group">
//                             <tr className="block md:table-row">
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Service ID</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Customer Name</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Email</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Price</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Date</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Message</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Image</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Status</th>
//                                 <th className="py-3 px-4 border-b font-semibold text-left block md:table-cell">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="block md:table-row-group">
//                             {bookings.map((booking, index) => (
//                                 <tr key={index} className="block md:table-row hover:bg-gray-50">
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.service_id}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.customerName}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.email}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">${booking.price}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.date}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.message}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">
//                                         <img src={booking.img} alt="Service" className="w-20 rounded" />
//                                     </td>
//                                     <td className="py-3 px-4 border-b block md:table-cell">{booking.status || 'Pending'}</td>
//                                     <td className="py-3 px-4 border-b block md:table-cell flex space-x-2">
//                                         {/* Toggle Status Button */}
//                                         <button
//                                             onClick={() => toggleStatus(booking._id, booking.status || 'Pending')}
//                                             className={`px-3 py-1 rounded ${booking.status === 'Confirmed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}
//                                         >
//                                             {booking.status === 'Confirmed' ? 'Confirmed' : 'Pending'}
//                                         </button>

//                                         {/* Delete Button */}
//                                         <button
//                                             onClick={() => handleDelete(booking._id)}
//                                             className="px-3 py-1 bg-red-500 text-white rounded"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 <p>No bookings found.</p>
//             )}
//         </div>
//     );
// };

// export default Bookings;



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, {})

    return (
        <div>
            <h1>Booking length: {booking.length}</h1>

        </div>
    );
};

export default Bookings;