// setTimeout(() => {
//   alert("this statement is successfull");
// }, 3000);
// setInterval(() => {
//     console.log('this is running on interval of 3 sec');

// }, 3000);
const newPrms1 = new Promise((success, failure) => {
  setTimeout(() => {
    success("this statement 1 is successfull");
  }, 300);
});

const newPrms2 = new Promise((success, failure) => {
  setTimeout(() => {
    success("this statement 2 is successfull");
  }, 4000);
});

// newPrms2
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.any([newPrms1, newPrms2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([newPrms1, newPrms2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([newPrms1, newPrms2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally((res) => {});

const fetchApi = async () => {
  try {
    const res = await fetch();
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

fetchApi();
