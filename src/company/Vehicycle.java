package company;

class Vehicle extends Car {
Number price;
Vehicle(String brand,String name,Number course,Engine effcient, Number price){
    super(brand,name,course,effcient);
    this.price = price;
}

void getInfo() {
    System.out.println("Auto "+this.brand+this.name+" kosztuje "+this.price +" i jego silnik jest"+ this.efficient);

}

void driveCar(){
    System.out.println("Vehicle is driving");
}
}
