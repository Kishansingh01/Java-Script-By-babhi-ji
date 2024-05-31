let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
company.splice(0,1);
console.log(company)

company.splice(2,1,"Ola")
console.log(company)

 company.push("amazon");
console.log(company)

company.splice(5,0,"Amazon");
console.log(company)