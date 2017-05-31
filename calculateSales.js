var salesTaxRates = { // salesTaxRate is Object with 3 fields
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [ // companySalesData is An Array of ???
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


//Implement the function calculateSalesTax that returns the results below.
function calculateSalesTax(salesData, taxRates) {  //salesData is an array
  // Implement your code here
    var result_final = {};

   for(var i = 0; i<salesData.length; i++){ // iterate company object
      var companyName = salesData[i].name; // get the name

      var salesdata = salesData[i].sales; // get the array of sales

      var pro = salesData[i].province; // get the correct province

      var tax = salesTaxRates[pro]; // get the correct tax rate

      var temp_sum = calculatesSum(salesdata); // get the total sales;
      var temp_tax = temp_sum * tax; // get the total tax

       if(!result_final.companyName){ // if the field does not exits
        result_final[companyName] = {}; // create new key and initialize it
        result_final[companyName].totalSales = temp_sum;
        result_final[companyName].totalTaxes = temp_tax;
       }

       else{ // if the field did exist
        result_final[companyName].totalSales += temp_sum;
        result_final[companyName].totalTaxes += temp_tax;
       }
   }

 return result_final;
}

function calculatesSum(salesD){
   var sales = 0;
   for(var i=0; i < salesD.length; i++){
    sales += salesD[i]; // get the sum
  }
  return sales;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/