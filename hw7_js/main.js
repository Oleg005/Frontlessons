class Driver {
    constructor(name, experience) {
      this.name = name;
      this.experience = experience;
    }
  }
  
  class Engine {
    constructor(power, manufacturer) {
      this.power = power;
      this.manufacturer = manufacturer;
    }
  }
  
  class Car extends Engine {
    constructor(brand, classCar, weight, driver, power, manufacturer) {
      super(power, manufacturer);
      this.brand = brand;
      this.classCar = classCar;
      this.weight = weight;
      this.driver = driver;
    }
  
    start() {
      console.log("Поїхали");
    }
  
    stop() {
      console.log("Зупиняємося");
    }
  
    turnRight() {
      console.log("Поворот праворуч");
    }
  
    turnLeft() {
      console.log("Поворот ліворуч");
    }
  
    toString() {
        return `Автомобіль: ${this.brand}\<br><br>Клас: ${this.classCar}\<br><br>Вага: ${this.weight}\<br><br>Водій: ${this.driver.name}\<br><br>Досвід: ${this.driver.experience} років досвіду\<br><br>Потужність: ${this.power}\<br><br>Виробник: ${this.manufacturer}\<br><br><br>`;
      }
  }

  class Truck extends Car {
    constructor(brand, carClass, weight, driver, power, manufacturer, carryingCapacity) {
        super(brand, carClass, weight, driver, power, manufacturer);
        this.liftability = liftability;
    }

    toString() {
        return `Автомобіль: ${this.brand}\<br><br>Клас: ${this.classCar}\<br><br>Вага: ${this.weight}\<br><br>Водій: ${this.driver.name}\<br><br>Досвід: ${this.driver.experience} років досвіду\<br><br>Потужність: ${this.power}\<br><br>Виробник: ${this.manufacturer}\<br><br>Вантажопідйомність кузова: ${this.liftability}\<br><br><br>`;
    }
  }

  class SportsCar extends Car{
    constructor(brand, carClass, weight, driver, power, manufacturer, topSpeed) {
        super(brand, carClass, weight, driver, power, manufacturer);
        this.topSpeed = topSpeed;
    }

    toString() {
        return `Автомобіль: ${this.brand}\<br><br>Клас: ${this.classCar}\<br><br>Вага: ${this.weight}\<br><br>Водій: ${this.driver.name}\<br><br>Досвід: ${this.driver.experience} років досвіду\<br><br>Потужність: ${this.power}\<br><br>Виробник: ${this.manufacturer}\<br><br>Максимальна швидкість: ${this.topSpeed}`;
    }
  }
  
  const driver = new Driver("Oleg Kalka", 3);
  const car = new Car("Mercedes-Benz GLE", "Кросовер", "2700 kg", driver, "302 hp", "Mercedes-Benz");

  const driver1 = new Driver("Oleg Kalka", 3);
  const car1 = new Car("DAF XF", "Вантажівка", "4500 kg", driver1, "410 hp", "DAF", "24.000 kg");

  const driver2 = new Driver("Oleg Kalka", 3);
  const car2 = new Car("Lamborghini Aventador", "Coupe", "1550 kg", driver2, "780 hp", "Lamborghini", "356 km/h");
  
  document.write(car.toString());
  document.write(car1.toString());
  document.write(car2.toString());
  car.start();
  car.turnLeft();
  car.stop();