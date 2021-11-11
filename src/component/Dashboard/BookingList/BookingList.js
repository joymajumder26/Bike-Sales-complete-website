import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import BookListDetails from '../BookListDetails/BookListDetails';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookItem, setBookItem] = React.useState([])
    React.useEffect(() => {
        // load data
        fetch('https://obscure-ocean-60599.herokuapp.com/bookCollection?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
            
                setBookItem(data)
            })

    }, [bookItem,setBookItem])
    console.log(bookItem);
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                {
                    bookItem.map(details => <BookListDetails BookListDetails={details}></BookListDetails>) //maping all data
                }
            </div>
        </section>
    );
};

export default BookingList;