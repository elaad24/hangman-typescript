type hangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: hangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontFamily: "monospace",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              borderBottom: "0.1rem black solid",
            }}
          >
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
