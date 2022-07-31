import React, {useState} from "react";
import {useEndlessProps} from "../useEndlessProps";
import {Seed} from "../../../game/seed";
import css from "../MenuPopup.module.css";
import {Command} from "../../../game/command";

function assertHasValue(data: unknown): asserts data is { value: string } {
    if (data == null) {
        throw Error(`${data} is invalid`)
    }
    const d = data as Record<string, unknown>
    if (typeof d.value !== "string") {
        throw Error(`value is not string`)
    }
}

type NewGameOption = "random" | "seed"

function assertIsNewGameOption(data: string): asserts data is NewGameOption {
    if (data !== "random" && data !== "seed") {
        throw Error(`${data} is not NewGameOption`)
    }
}

export const NewButton: React.FC<{close: () => void}> = ({close}) => {

    const {input, seed, newWithSeed} = useEndlessProps()

    const [selected, setSelected] = useState<NewGameOption>("random")

    const [newSeedText, setNewSeedText] = useState<string>(seed.value.toString())

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        assertHasValue(e.target)
        assertIsNewGameOption(e.target.value)
        setSelected(e.target.value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSeedText(e.target.value)
    }

    return (
        <div>
            <div>
                <label>
                    <input type="radio" name="new" value="random" defaultChecked={true} onClick={handleClick}/>
                    ミノ順ランダム
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="new" value="seed" defaultChecked={false} onClick={handleClick}/>
                    シード値指定
                </label>
            </div>
            {selected === "seed" &&
                <div>
                    <small>8 桁の整数 (0 ~ 99999999) で指定</small><br/>
                    <input className={css.seedInput} type="number" placeholder="12345" max={Seed.max}
                           value={newSeedText} onChange={handleChange}/>
                </div>
            }

            <button
                className={css.newButton}
                onClick={() => {
                    if (selected === "random") {
                        input(Command.NewGame)
                    } else {
                        const num = newSeedText === "" ? 0 : parseInt(newSeedText)
                        newWithSeed(new Seed(num))
                    }
                    close()
                }}
            >
                <h1>新規プレイ</h1>
            </button>
        </div>
    )
}
