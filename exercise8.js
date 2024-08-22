function discount(totalamount) {
  return totalamount > 100 ? totalamount * 0.1 : totalamount * 0.05;
}
console.log(discount(10000));
