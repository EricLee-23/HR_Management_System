import React from 'react';
import './Admin.css';

const CandidateSearch = () => {

    return (
        <div className='Candidate_Search_Container'>
            <h1>Search Candidates</h1>
            <form>
                <label for="fname">First name:</label><br></br>
                <input type="text" id="fname" name="fname" /><br></br>
                
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname" /><br></br>

                <input type='submit'></input>
            </form>
        </div>
    );
};

function Admin() {
    return (
        <>
            <header className='Admin_header'>
                <img src='/mango_picture.png' alt=''></img>
                <h1>Welcome to Admin Page</h1>
            </header>
            <CandidateSearch />
        </>
    );
}

export default Admin;