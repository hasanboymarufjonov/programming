const companies = [
    {name: "Company One", category: "Finance", start: 1982, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0; i < companies.length; i++){
//    console.log(companies[i]);
// }

// forEach
/*
companies.forEach(function(company){
    console.log(company);
});
*/

// filter
/*
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
} 
*/
/*
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});
*/

// const canDrink = ages.filter( age => age >= 21);

// Filter retail companies

/*
const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
});
*/

//const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Get 80s companies
/*
const eighty = companies.filter(function(company){
    if(company.start < 1990){
        return true;
    }
});
*/

// const eighty = companies.filter(company => company.start < 1990);

// console.log(eighty);

// map

// Create array of company names
/*
const companyNames = companies.map(function(company){
    return company.name;
})

console.log(companyNames);
*/

// sort
/*
const sortCompanies = companies.sort(function(a, b){
    if(a.start > b.start){
        return 1;
    } else{
        return -1;
    }
});
*/

// const sortCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);

// console.log(sortCompanies);

// Sort Ages
// const sortAge = ages.sort((a, b) => a - b);
// console.log(sortAge);


// reduce
/*
let ageSun = 0;
for(let i=0; i < ages.length; i++){
    ageSun += ages[i];
}
*/
/*
const ageSun = ages.reduce((total, age) => total + age, 0);
console.log(ageSun);
*/
/*
const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0);
*/

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);   

// Combine methods

const combined = ages
    .map(age => age*2)
    .filter(age => age >=40)
    .sort((a, b) => a-b)
    .reduce((a, b) => a + b, 0);
console.log(combined);