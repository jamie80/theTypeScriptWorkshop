// Interfejs dla obiektów osoby
interface Person {
  firstName: string;
  lastName: string;
}

// Tej zmiennej używamy do liczenia wywołań
let count = 0;

// Pobieramy pełną nazwę danej osoby
function getFullName (person: Person) {
  count += 1;
  return `${person.firstName} ${person.lastName}`;
}

// Tablica osób, które musimy posortować
const programmers: Person[] = [
  { firstName: 'Donald', lastName: 'Knuth'},
  { firstName: 'Barbara', lastName: 'Liskow'},
  { firstName: 'Lars', lastName: 'Bak'},
  { firstName: 'Guido', lastName: 'Van Rossum'},
  { firstName: 'Anders', lastName: 'Hejslberg'},
  { firstName: 'Edsger', lastName: 'Dijkstra'},
  { firstName: 'Brandon', lastName: 'Eich'},
  // Możesz dodać tyle, ile chcesz
];


// Naiwna i prosta funkcja sortowania
function naiveSortPersons (persons: Person[]): Person[] {
  return persons.slice().sort((first, second) => {

      console.log("* * * ");
      console.log(first);
      console.log("* * * ");
      console.log(second);
      console.log("* * * ");

      const firstFullName = getFullName(first);
      console.log(`firstFullName: ${firstFullName}`);
      console.log("* * * ");
      const secondFullName = getFullName(second);
      console.log(`secondFullName: ${secondFullName}`);
      const result = firstFullName.localeCompare(secondFullName);
      console.log(result);
      return result; 
  })
}

// Przyjmujemy tablicę osób i zwracamy (posortowaną) tablicę osób
// Używamy transformacji Schwartza
function schwartzSortPersons (persons: Person[]): Person[] {
  // Używamy funkcji `map` tablicy, aby przekształcić każdy element w krotkę
  const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)]);
  // Sortujemy tablicę `tuples` krotek za pomoca standardowej metody `sort` dla drugiego elementu krotki
  tuples.sort((first, second) => first[1].localeCompare(second[1]));
  // Przekształcamy posortowaną tablicę krotek w pożądany format, czyli po prostu tablicę obiektów `person`,
  // przyjmując pierwszy element każdej krotki, pozbywając się Schwartza
  const result = tuples.map(tuple => tuple[0]);
  // Zwracamy z funkcji nową tablicę
  return result;
}

// Dla zdefiniowanej tablicy wywołujemy naiwną funkcję `sortPersons`
count = 0;
const sortedNaive = naiveSortPersons(programmers);

// Wypisujemy posortowaną tablicę i zmienną count
console.log(sortedNaive);
console.log(`Przy użyciu naiwnego podejścia funkcja została wywołana następującą liczbę razy: ${count}`);

// Dla zdefiniowanej tablicy wywołujemy funkcję Schwartza `sortPersons`
count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);

// Wypisujemy posortowaną tablicę i zmienną count
console.log(sortedSchwartz);
console.log(`Przy użyciu transformacji Schwartza funkcja została wywołana następującą liczbę razy: ${count}`);
