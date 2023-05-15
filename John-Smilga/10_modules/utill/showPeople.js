function showPerson(person) {
  const newPerson = person.map(({ name, age }) => {
    return `<p>Name : ${name} age : ${age}</p>`;
  });

  return newPerson.join("");
}

// one js file can have only one default export possible
export default showPerson;
