package company;

public class Main {
    public static void main(String[] args){

        // Konstruktory a kompozycja
        Engine silnik = new Engine("sprawny");
        Vehicle audi = new Vehicle("audi","a3",120000,silnik,12000);
        audi.getInfo();
        audi.driveCar();

        // Konstruktory a dziedziczenie
        Car car = new Car("audi","a3",120000,silnik);
        car.driveCar();

        // Przeciążanie metod
        car.expenses(2000,800);
        car.expenses(99.99,999.99);

        // Przesłanianie metod
        Slides slides = new Slides(0,3);
        Indicators indicators = new Indicators(2,4);

        System.out.println("Przesłanianie metod :");

        slides.showInfo();
        indicators.showInfo();

        // Przesłanianie pól

        System.out.println("Przesłanianie pól :");

        System.out.println(slides.name);
        System.out.println(indicators.name);
        System.out.println(slides.sliderName);


    }
}
