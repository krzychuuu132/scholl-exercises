package company;


class Slides extends Slider{
    int index;
    String name;
    String sliderName;
    Slides(int index, int counter){
        super(counter);
        this.index = index;
        this.name = "pole z klasy Slides";
        this.sliderName = super.name;
    }

    @Override
    void showInfo(){
        System.out.println("Metoda w klasie Slides");
    }
}

