fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((json) => {
    let myJson = json.users.map((e) => {
      let p = {
        id: e.id,
        name: e.firstName + " " + e.lastName,
        profilePic: e.image,
      };
      return p;
    });
    console.log("export const faker = " + JSON.stringify(myJson));
  });
