function litersToGallons(liters) {
  var liters_in_a_gallon = 3.78541
  return liters*liters_in_a_gallon
}

function eurosToDollars(euros) {
  var euros_in_a_dollar = 0.80
  return euros*(1/euros_in_a_dollar)
}

var usa_usd_per_gallon = 2.5
var germany_eur_per_liter = 1.2

var germany_eur_per_gallon = litersToGallons(germany_eur_per_liter)

var germany_usd_per_gallon = eurosToDollars(germany_eur_per_gallon)

var answer = "Germany and US have a gas price difference of $"+Math.abs(germany_usd_per_gallon-usa_usd_per_gallon)+" USD"

console.log(answer)
