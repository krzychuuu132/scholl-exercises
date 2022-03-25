package company;

public class Car {
    String brand;
    String name;
    Number course;
    Engine efficient;

    public Car(String brand,String name,Number course,Engine effcient){
        this.brand = brand;
        this.name = name;
        this.course = course;
        this.efficient = effcient;
    }

    void driveCar (){
        System.out.println("Car is driving");
    }

    int expenses(int engine, int wheels){
        System.out.println("Metoda z intem");
        return engine + wheels;
    }

    double expenses(double engine, double wheels){
        System.out.println("Metoda z floatem");
        return engine + wheels;
    }
}
