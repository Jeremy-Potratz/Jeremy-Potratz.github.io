interface Hint {
    hintText: String;
    isShown: boolean;
 }

interface BballClass {
    activeDate : Date;
    hints : Hint[];
    answer : String;
}



const BasketballData : BballClass[] = [
    {
        activeDate : new Date("11/17/2024"),
        hints : [],
        answer : ""
    },
    {
        activeDate : new Date("11/17/2024"),
        hints : [],
        answer : ""
    },
    {
        activeDate : new Date("11/17/2024"),
        hints : [],
        answer : ""
    },

]