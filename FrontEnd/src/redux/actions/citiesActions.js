import axios from "axios"

import {actionType} from "../reducers/citiesReducer";


export const addCity = (CITY) => {
    return {

        type: actionType.addCity,
        data: CITY

    }
};


const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjcwNTgxOGYyYzI0M2FlYTNjZGEiLCJpYXQiOjE1NTEwNzg3MDksImV4cCI6MTU1MTE2NTEwOSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiMjg4MmViYTgtM2E1Zi00ZWI3LWIxNTEtZjgxZTE3YjJmN2M1In0.TRKTCiKZrPuHgeNFX513oEyE-JC8EKUDMGDYxNDZ9UA";

export const deleteCity = id => async dispatch => {
    await axios
        .delete(`http://52.213.25.226:3030/city/${id}`, {
            headers: { Authorization: token }
        })

        .catch(err => console.log("Failed connection", err));
    dispatch({ type: actionType.deleteCity, data: { id } })
};
