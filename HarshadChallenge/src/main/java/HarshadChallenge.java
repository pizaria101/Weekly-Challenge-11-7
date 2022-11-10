import java.util.Scanner;

public class HarshadChallenge {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        System.out.println(isHarshad(num));
    }

    public static boolean isHarshad(int number) {
        return number % addDigits(number) == 0;
    }

    public static int addDigits(int number) {
        if(number == 0){
            return 0;
        }else{
            return (number % 10 + addDigits(number / 10));
        }
    }
}
