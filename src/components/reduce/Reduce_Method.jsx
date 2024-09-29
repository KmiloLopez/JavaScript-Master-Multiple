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
  //No se puede acceder  acc[accumulatedd] ya que accumulatedd lo esta reconociendo como si fuese
  //usa variable y esta variable no esta definidad, por eso toca acc.accumulated o acc["accumulatedd"]
  //   const sumAllNumbers = numbersList.reduce(
  //     (acc, currentNumber) => {
  //       acc[accumulatedd] += currentNumber;
  //       return acc;
  //     },
  //     { accumulatedd: 0 }
  //   );
  console.log(letsCountRepeated);
  console.log(sumAllNumbers);
  return (
    <>
      <h3>Count how many times the musical note repeat</h3>
    </>
  );
};

export default Reduce_Method;
