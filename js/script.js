const str = 'some string';
const num = 10;
const bool = true;
const arr = ['Jay', 'Avi', 'Faith'];

const data = {
  name: 'JD',
  age: 44,
  info: {
    location: 'Atl',
    hobbies: [
      {
        name: 'Fishing',
        frequency: 'once every two weeks'
      },
      {
        name: 'Pickleball',
        frequency: 'once a week'
      }
    ]
  }
};

console.log(data.info.hobbies[0].frequency);
