import './components/guessNumberGame/guessNumberGame';

// const valeAnguloMail = 'valeria.angulo@pluriza.com';

// const helberth = {
//   firstName: 'Helberth',
//   lastName: 'Caro',
//   birthDate: '1991-02-22',
//   job: 'Frontend Engineer',
//   friends: ['Juan Camilo', 'Juan David', 'Juan Felipe'],
//   hasDriveLicense: true,
//   currentAge: function () {
//     const daysInMonth = 30.436875;
//     const birthDate = new Date(`${this.birthDate}T12:00:00Z`);
//     const currentDate = new Date();

//     const birthDateYear = birthDate.getFullYear();
//     const currentDateYear = currentDate.getFullYear();
//     let yearsOld = currentDateYear - birthDateYear;

//     birthDate.setFullYear(currentDateYear);

//     const currentDateMS = currentDate.getTime();
//     let birthDateMS = birthDate.getTime();

//     if (currentDateMS < birthDateMS) {
//       --yearsOld;
//       birthDate.setFullYear(currentDateYear - 1);
//       birthDateMS = birthDate.getTime();
//     }

//     let daysOld = (currentDateMS - birthDateMS) / 86400000;
//     const monthsMath = daysOld / daysInMonth;
//     const monthsOld = Math.floor(monthsMath);

//     daysOld = Math.floor(daysInMonth * (monthsMath - monthsOld));

//     const fullAge = `${yearsOld} years, ${monthsOld} months and ${daysOld} days`;

//     return fullAge;
//   },
// };
