import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { Label } from "../types/Label";
import { WordLabel } from "../types/WordLabel";

function AddWord() {
    const [word, setWord] = useState("");
    const [label, setLabel] = useState<Label>("noun");

    const addWord = async (wordLabel: WordLabel) => {
        const {data} = await axios.post("https://localhost:44376/api/WordLabels", wordLabel);
        return data;
    }

    const { mutate, status } = useMutation(addWord);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (word === "") return;
        const wordLabel = {
            word: word,
            label: label
        };
        mutate(wordLabel);
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="Ord att lägga till" value={word} onChange={(e) => setWord(e.target.value)} className="rounded-md py-3 px-6 m-2 shadow-md outline-none" />
                <select aria-label="Label select" value={label} onChange={(e) => setLabel(e.target.value as Label)} className="rounded-md p-1 m-2 shadow-md outline-none cursor-pointer">
                    <option value="noun">Substantiv</option>
                    <option value="adjective">Adjektiv</option>
                    <option value="verb">Verb</option>
                    <option value="adverb">Adverb</option>
                    <option value="determiner">Determinant</option>
                    <option value="preposition">Preposition</option>
                    <option value="pronoun">Pronomen</option>
                    <option value="conjunction">Konjunktion</option>
                    <option value="interjection">Interjektion</option>
                </select>
                <button type="submit" className="bg-red-400 hover:bg-red-600 rounded-full py-3 px-6 m-2 shadow-md outline-none">
                    Lägg till
                </button>
            </form>
            { status === "loading" &&
                <div>
                    <p>Lägger till ord...</p>
                </div>
            }
            { status === "error" &&
                <div>
                    <p>Ett fel uppstod</p>
                </div>
            }
            { status === "success" &&
                <div>
                    <p>Ordet { word } har lagts till med etiketten { label }!</p>
                </div>
            }
        </div>
    );
}
export default AddWord;