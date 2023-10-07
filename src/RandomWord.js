let Car_Brand = [
    "tesla",
    "bmw",
    "porsche",
    "honda",
    "toyata",
    "hyundai",
    "audi",
    "nissan",
    "dodge",
    "volkswagen",
    "kia",
    "volvo",
    "mercedes benz",
    "chevrolet",
    "ford",
    "gmc",
    "jaquar",
    "jeep",
    "land rover",
    "mini"
  ];
  
  function randomWord() {
    return Car_Brand[
      Math.floor(Math.random() * Car_Brand.length)
    ];
  }
  
  export { randomWord };