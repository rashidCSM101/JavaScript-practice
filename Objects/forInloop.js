let student = {
    name: "John Doe",
    age: 20,
    grade: 12,
    gpa: 3.8,
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    phone: "555-555-5555",
    email: "johndoe@example.com"
  };
  for (const key in student) {
  //  console.log(key, student[key]);
  console.log(`${key} ${student[key]}`);
  }
  // console.log(student);