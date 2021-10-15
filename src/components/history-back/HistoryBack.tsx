import {useGameHistory} from "../../hooks/useGameHistory";
import React from "react";

export default function HistoryBack() {
    const { back, historySize } = useGameHistory()
    return <button type="button" onClick={() => {back()}} disabled={historySize === 1}>一手戻る</button>
}
