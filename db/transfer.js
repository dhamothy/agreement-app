const faker = require('faker');

function genTransfer(){
  const transfer = [];
  for(let i = 0; i < 50; i++){
    transfer.push({      
      "id": i + 1,
      "firstName": faker.name.firstName(),
      "lastName": faker.name.lastName(),      
      "email": faker.internet.email(),
      "country": faker.address.country(),
      "price": faker.commerce.price(1000,10000,2,'$'),
      "company": faker.company.companyName(),
    })
  }

  return {"transfer": transfer};
}

module.exports = genTransfer;