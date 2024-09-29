//1. Count how many times the notes repeat, initializing the reduce with empty object {}
//{ do: 6, sol: 3, re: 3, la: 3, mi: 3, fa: 3, si: 2 }

//2. Sum total from Array of integers, initializing the reduce with object {accumulatedd: 0}
//{ accumulatedd: 6 }
const notasMusicales = [
  "do",
  "sol",
  "re",
  "la",
  "mi",
  "fa",
  "si",
  "re",
  "sol",
  "mi",
  "fa",
  "la",
  "do",
  "si",
  "mi",
  "la",
  "sol",
  "fa",
  "re",
  "do",
  "do",
  "do",
  "do",
];
const numbersList = [0, 1, 2, 3];
const Reduce_Method = () => {
  const letsCountRepeated = notasMusicales.reduce((acc, currentNote) => {
    if (!acc[currentNote]) {
      acc[currentNote] = 1;
    } else {
      acc[currentNote] += 1;
    }
    return acc;
  }, {});

  const sumAllNumbers = numbersList.reduce(
    (acc, currentNumber) => {
      acc.accumulatedd += currentNumber;
      return acc;
    },
    { accumulatedd: 0 }
  );

  const sumNumbersArrRes = numbersList.reduce(
    (acc, currentNumber) => {
      acc[0] += currentNumber;
      return acc;
    },
    [0]
  );

  const sumNumbers = numbersList.reduce((acc, currentNumber) => {
    acc += currentNumber;
    return acc;
  });

  //No se puede acceder  acc[accumulatedd] ya que accumulatedd lo esta reconociendo como si fuese
  //usa variable y esta variable no esta definidad, por eso toca acc.accumulated o acc["accumulatedd"]
  //   const sumAllNumbers = numbersList.reduce(
  //     (acc, currentNumber) => {
  //       acc[accumulatedd] += currentNumber;
  //       return acc;
  //     },
  //     { accumulatedd: 0 }
  //   );
  console.log(letsCountRepeated); //{ do: 6, sol: 3, re: 3, la: 3, mi: 3, fa: 3, si: 2 }
  console.log(sumAllNumbers); //{ accumulatedd: 6 }
  console.log(sumNumbersArrRes); //[ 6 ]
  console.log(sumNumbers); // 6
};
Reduce_Method();
