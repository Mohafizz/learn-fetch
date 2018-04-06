const fetch = require("node-fetch");
const BASE_URL = "http://localhost:3000";

fetch(`${BASE_URL}/api/user`, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1YWM3MTVmYTZmZTg5NzM2ZWY4YTc3Y2QiLCJ1c2VybmFtZSI6InNvbWV1c2VyIiwiZXhwIjoxNTI4MTgwNzMxLCJpYXQiOjE1MjI5OTY3MzF9.1mMkPdyJJfZAWIHw3fFzcz_cNON-nBDQjUEneWXQL2I"
  }
})
  .then(data => data.json())
  .then(data => console.log(data));
