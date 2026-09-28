const count = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (count[sound]) {
      count[sound]++;
    } else {
      count[sound] = 1;
    }
  }
}

console.log(count);