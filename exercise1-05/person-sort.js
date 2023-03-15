// Tej zmiennej używamy do liczenia wywołań
var count = 0;
// Pobieramy pełną nazwę danej osoby
function getFullName(person) {
    count += 1;
    return person.firstName + " " + person.lastName;
}
// Tablica osób, które musimy posortować
var programmers = [
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Barbara', lastName: 'Liskow' },
    { firstName: 'Lars', lastName: 'Bak' },
    { firstName: 'Guido', lastName: 'Van Rossum' },
    { firstName: 'Anders', lastName: 'Hejslberg' },
    { firstName: 'Edsger', lastName: 'Dijkstra' },
    { firstName: 'Brandon', lastName: 'Eich' },
];
// Naiwna i prosta funkcja sortowania
function naiveSortPersons(persons) {
    return persons.slice().sort(function (first, second) {
        console.log("* * * ");
        console.log(first);
        console.log(second);
        console.log("* * * ");
        var firstFullName = getFullName(first);
        console.log("firstFullName: " + firstFullName);

        var secondFullName = getFullName(second);
        console.log("secondFullName: " + secondFullName);

        var result = firstFullName.localeCompare(secondFullName);
        console.log(result);
        
        return result;
    });
}
// Przyjmujemy tablicę osób i zwracamy (posortowaną) tablicę osób
// Używamy transformacji Schwartza
function schwartzSortPersons(persons) {
    // Używamy funkcji `map` tablicy, aby przekształcić każdy element w krotkę
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    // Sortujemy tablicę `tuples` krotek za pomoca standardowej metody `sort` dla drugiego elementu krotki
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    // Przekształcamy posortowaną tablicę krotek w pożądany format, czyli po prostu tablicę obiektów `person`,
    // przyjmując pierwszy element każdej krotki, pozbywając się Schwartza
    var result = tuples.map(function (tuple) { return tuple[0]; });
    // Zwracamy z funkcji nową tablicę
    return result;
}
// Dla zdefiniowanej tablicy wywołujemy naiwną funkcję `sortPersons`
count = 0;
var sortedNaive = naiveSortPersons(programmers);
// Wypisujemy posortowaną tablicę i zmienną count
console.log(sortedNaive);
console.log("Przy u\u017Cyciu naiwnego podej\u015Bcia funkcja zosta\u0142a wywo\u0142ana nast\u0119puj\u0105c\u0105 liczb\u0119 razy: " + count);
// Dla zdefiniowanej tablicy wywołujemy funkcję Schwartza `sortPersons`
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
// Wypisujemy posortowaną tablicę i zmienną count
console.log(sortedSchwartz);
console.log("Przy u\u017Cyciu transformacji Schwartza funkcja zosta\u0142a wywo\u0142ana nast\u0119puj\u0105c\u0105 liczb\u0119 razy: " + count);
