const Promises = () => {
  function promiseAll(promises) {
    const outputs = [];
    let setledPromiseCounter = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            outputs[index] = value;
            setledPromiseCounter++;
            if (setledPromiseCounter === promises.length) {
              resolve(outputs);
            }
          })
          .catch(reject);
      });
    });
  }
  const slowPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("DONE");
    }, 2000);
  });
  const promises = [
    Promise.resolve(2),
    //Promise.resolve(3),
    //Promise.reject(5),
    slowPromise,
  ];
  promiseAll(promises)
    .then((res) => console.log("all promises resolved", res))
    .catch(console.error);

  return <div>Promises</div>;
};

export default Promises;
