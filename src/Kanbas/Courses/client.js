import axios from "axios";
import {COURSES_URL} from "./service";

export const fetchCourses = async() => {
    const response = await axios.get(COURSES_URL)
    return response.data;
};

export const fetchCourse = async (id) => {
    const response = await axios.get(`${COURSES_URL}/${id}`);
    return response.data;
};


export const deleteCourse = async (id) => {
    const response = await axios.delete(`${COURSES_URL}/${id}`);
    return response.data;
};

export const updateCourse = async(course) => {
    const response = await axios.put(
        `${COURSES_URL}/${course._id}`,
        course
    );
    return response.data;
};

export const addCourse = async (course) =>{
    const response = await axios.post(
        `${COURSES_URL}`, course);
    return response.data;
};





