import java.util.*;

public class GFG {


  // checkwinner vil blive valgt
  // ved kombinationerne nedenunder

 static string checkwinner()
{
   for (Int a = 0; a < 8; a++) {
     string line = null;

     switch (a) {
       case 0:
       line = board[0] + board [1] + board[2];
       break;
       case 1:
       line = board[3] + board [4] + board[5];
       break;
       case 2:
       line = board[6] + board [7] + board[8];
       break;
       case 3:
       line = board[0] + board [3] + board[6];
       break;
       case 4:
       line = board[1] + board [4] + board[7];
       break;
       case 5:
       line = board[2] + board [5] + board[8];
       break;
       case 6:
       line = board[0] + board [4] + board[8];
       break;
       case 7:
       line = board[2] + board [4] + board[6];
       break;
     }
     //dette er hvis x vinder
     if (line.equals("xxx")){
       return "X";
     }
     //Og hvis O vinder så,
     else if (line.equals("OOO")){
       return "O"
     }
   }

  for (Int a = 0; a < 9; a++) {
    if(arrays.aslist(board).contains(string.valueOf(a + 1))) {
      break;
    }
    else if (a == 8) {
      return "Draw";
    }
  }
  // for at kunne indtaste X eller O præcist på boarded bruger man Dette
  System.out.println(
    turn + "'s turn; Indtast et nummer for at placere"
    + turn + "in:");
}

// nu skal boarded printes ud

static void printboard()
{
  System.out.println("|---|---|---|");
  System.out.println(" | " + board[0] + " | " + board[1] + " | " + board[2] + " | ");

  System.out.println("|-----------|");
  System.out.println(" | " + board[3] + " | " + board[4] + " | " + board[5] + " | ");

  System.out.println("|-----------|");
  System.out.println(" | " + board[6] + " | " + board[7] + " | " + board[8] + " | ");

  System.out.println("|---|---|---|");
}

public static void main(String[] args)
 {

       Scanner in = new Scanner(System.in);
       board = new String[9];
       turn = "X";
       String winner = null;

       for (int a = 0; a < 9; a++) {
           board[a] = String.valueOf(a + 1);
       }
  System.out.println("Welcome to 3x3 Tic Tac Toe");
  Printboard();

  System.out.println("X vil spille først vælg et nummer at sætte X i");

  while (winner == null) {
    Int numInput;

    //undtagelsesbehandling, NumInput vil tage det NumInput
    //som brugeren vælger fra 1-9, hvis ikke du vælger 1-9 vil den sige
    // "ugyldigt input"
    try {
      NumInput = in.nextInt();
      if (!(numInput > 0 && numInput <= 9)) {
        System.out. Println("Ugyldigt input; Tast igen:");
        continue;
      }
    }

    //Spillet har 2 spillere, en spiller X og en spille
    // her har vi logikken bag hvem der skal trykke hvornår
    if (board[numInput - 1].equals(string.valueOf(numInput))) {
      board[numInput - 1] = turn;

      if (turn.equals("X")) {
        turn = "O";
      }
      else {
        turn = "X";
      }
      printboard();
      winner = checkwinner();
    }
    else {
      System.out.println("plads allerede taget; Tast igen:");
    }
  }
  // hvis ingen vinder
  // så vil logikken bag "draw" være nedenunder her
  if (winner.equalsIgnoreCase("draw")) {System.out.println("Det er draw! Tak for at spille :)");
}


  //Og for vinderen...
  else {
    System.out.println("Tillykke!" + winner + " har vundet!");
      }
  }
}
