import axios from "axios";


export default {

  // Gets all resources
  getResources: function() {
    return axios.get("/api/resources")
  },

  // Deletes the resource with the given id
  deleteResource: function(title) {
    return axios.delete("/api/resources/" + title);
  },
  // Saves a resource to the database
  saveResource: function(resourceData) {
    // console.log("API: " + resourceData)
    return axios.post("/api/resources", resourceData);
  },
  getUsers: function() {
    return axios.get("/api/users")
  },
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  removeUser: function(username) {
    return axios.delete("/api/users/" + username);
  },
  castVote: function(id, vote) {
    return axios.post("/api/resources/" + id, vote);
  },
  getCategory: function(category) {
    return axios.get("/api/resources/" + category)
  }
}
