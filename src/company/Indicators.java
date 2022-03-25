package company;


class Indicators extends Slider{
    int index;
    String name;
    Indicators(int index, int counter){
        super(counter);
        this.index = index;
        this.name = "Pole z klasy Indicators";
    }

    @Override
    void showInfo(){
        System.out.println("Metoda w klasie Indicators");
    }
}

