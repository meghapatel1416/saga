const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};


export const addPost = (data)=>{
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });

}
export default fetchGetUsers;