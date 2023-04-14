import React, { useState } from "react";
/*
Un composant qui ajoute des nombres à une somme et affiche le résultat suivant :

- La somme sous forme de nombre (texte)
- Un champ de texte de saisie
- Un bouton qui ajoute le nombre dans le champ de texte à la somme affichée
*/

export function AddNumber(props) {
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="card">
      <button
        type="button"
        onClick={() => {
          const nombre = parseInt(input);

          if (typeof nombre === "number" && !isNaN(nombre)) {
            setSum(sum + parseInt(input));
          }
        }}
      >
        <input
          onClick={(event) => {
            event.stopPropagation();
          }}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          type="text"
        />{" "}
        Add number {sum}
      </button>
    </div>
  );
}
