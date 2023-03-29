import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo",
    "Olha, faz sentido",
    "Parabéns",
  ]);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }
  // função para fazer um submit apertando crtl + Enter
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident non perspiciatis illo excepturi nostrum, tenetur distinctio, a consectetur repudiandae ipsum odio doloremque vitae. Quis recusandae dolor maiores veritatis magni placeat." />
      <Separator />
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/alexandre-schmidt.png" alt="Alexandre" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
