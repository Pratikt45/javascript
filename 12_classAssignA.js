// Class Constructor Assignment (31/05/23)

class Vehicle {
  constructor(companyName,model, price, colour,mileage) {
    this.companyName = companyName;
    this.model = model
    this.price = price;
    this.colour = colour;
    this.mileage = mileage;
  }
  showDetails() {
    console.log(
      `Company Name: ${this.companyName} , Model ${this.model} , Price: ${this.price} , Colour: ${this.colour} , Mileage : ${this.mileage} `
    );
  }
}
const tata = new Vehicle(
  "TATA",
  "Harier",
  "₹ 20.90 lakh",
  "Tropical Mist",
  "15-16 kmpl",
);
const toyota = new Vehicle(
  "Toyota",
  "Fortuner",
  "₹ 37.79 lakh",
  "Black",
  "10.01 kmpl"
);
const mahindraThar = new Vehicle(
  "Mahindra",
  "Thar",
  "₹ 15.56 lakh",
  "Black",
  "9.0kmpl",
);

const ford = new Vehicle(
  "Ford",
  "Mustang",
  "₹ 74.62 lakh",
  "Yellow",
  "13.3kmpl"
);
const lamborghini = new Vehicle(
  "Lamborghini",
  "Aventador",
  "₹ 6.65 Cr",
  "Grey",
  "5.41 kmpl"
);

tata.showDetails();
toyota.showDetails();
mahindraThar.showDetails();
ford.showDetails();
lamborghini.showDetails();

console.log(" ");

console.log(
  `Q.1: Travrse the Vehicle class objects`
);
const arrayOfVehicle = [
  tata,
  toyota,
  mahindraThar,
  ford,
  lamborghini,
];

for (const element of arrayOfVehicle) {
  element.showDetails();
}

console.log(" ");

class College {
  constructor(collegeName, department, city) {
    this.collegeName = collegeName;
    this.department = department;
    this.city = city;
  }
}
const sGBU = new College(
  "Santa Gadge Baba University",
  "Dr.Ambedkar Thought",
  "Amravati"
);
const Ram = new College(
  "Prof. Ram Meghe College of Engineering and Management",
  "Engineering and Technology",
  "Amravati"
);
const pote = new College(
  "P.R.Pote,Patil,Group,Of Edutional,Institudes",
  "Engineering",
  "Amravati"
);
const Sipna = new College(
  "Sipna College Of Engineering Amravati",
  "Engineering And MBA",
  "Amravati"
);
console.log(
  `Q.3: Traverse object of College`
);

travrse(sGBU);
console.log(`====================================================`);
travrse(Ram);
console.log(`====================================================`);
travrse(pote);
console.log(`====================================================`);
travrse(Sipna);

// console.log(`----------------------------Step.2,3: Traverse object of College-----------------------`);
function travrse(collegeObject) {
  for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
      const element = collegeObject[key];
      console.log(`${key} : ${element}`);
    }
  }
}
console.log('================================================');
console.log(" ");
console.log(`Q.4 Prime Number`);

let num = 11;
if (num%11==0) {
  console.log(`${num} is a Prime Number`);
}