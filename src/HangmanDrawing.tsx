import Hangman1 from "./imges/Hangman1.png";
import Hangman2 from "./imges/Hangman2.png";
import Hangman3 from "./imges/Hangman3.png";
import Hangman4 from "./imges/Hangman4.png";
import Hangman5 from "./imges/Hangman5.png";
import Hangman6 from "./imges/Hangman6.png";
import Hangman7 from "./imges/Hangman7.png";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  let image;

  switch (numberOfGuesses) {
    case 0:
      image = Hangman1;
      break;
    case 1:
      image = Hangman2;
      break;
    case 2:
      image = Hangman3;
      break;
    case 3:
      image = Hangman4;
      break;
    case 4:
      image = Hangman5;
      break;
    case 5:
      image = Hangman6;
      break;

    case 6:
      image = Hangman7;
      break;
  }
  return (
    <>
      <div
        style={{
          width: 300,
          height: 350,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} alt="" sizes="150" />
      </div>
    </>
  );
}
