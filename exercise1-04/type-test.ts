const daysInWeek = 7;
const name1 = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["Styczeń", "Luty", "Marzec"];
const notDefined = undefined;
const nothing = null;
const add = (x: number, y: number) => x + y;
const calculator = {
  add,
};

const everything = [
  daysInWeek,
  name1,
  isRaining,
  today,
  months,
  notDefined,
  nothing,
  add,
  calculator,
];

for (const sth of everything) {
  const type = typeof sth;
  console.log(sth, type);
}
