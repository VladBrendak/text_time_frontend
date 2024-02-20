import React, { useState } from "react";
import axios from "axios";
import { User } from "../interfaces/User";

// Change to actual API adress
const API_BASE_URL = "http://localhost:8080/texttime";

const UserService = {
    async createUser(user: User): Promise<User> {
      try {
        // Change to actual create user endpoint
        const response = await axios.post(`${API_BASE_URL}/createuser`, user);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },
  
  };
  
  export default UserService;
