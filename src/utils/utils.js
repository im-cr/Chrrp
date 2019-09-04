const Users = [  
  "Kanye West",
  "Jay-Z",
  "Rihanna",
  "Kid Cudi"
];



export function randomUser(user){
  return user[Math.floor(Math.random() * user.length)];
}
export const pickUser = () => {  
  //console.log(randomUser(Users));
  return randomUser(Users);
}