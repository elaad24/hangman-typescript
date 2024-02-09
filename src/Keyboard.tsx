import styles from "./keyboard.module.css";
type keyboardProps = {
  activeletters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};
export default function Keyboard({
  activeletters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}: keyboardProps) {
  const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {keys.map((key) => {
        const isActive = activeletters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || disabled}
            className={`${styles.btn}  ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
