import React, { Component } from 'react';
import PropTypes from "prop-types";

class User extends Component {
    render() {

        const {name, surname, isLoggedIn, age, friends, address} = this.props;

        if(!isLoggedIn)
        {
            return <div>Giriş yapmadınız</div>
        }

        return (
            <div>
                <h1>{name} {surname} ({age})</h1>
                
                {address.title}-{address.zip}

                <br /><br /><br />
                {
                    friends.map((friend,index) => 
                        <div key={index}>{friend.name}</div>
                        )
                }
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    friends: PropTypes.array.isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }).isRequired
}

User.defaultProps = {
    name: "isimsiz",
    isLoggedIn: false
}

export default User;
