import React from "react";

type HistoryBackProps = {
    back: () => void
    historySize: number
}

export const HistoryBack: React.FC<HistoryBackProps> = ({ back, historySize }) =>
    <button
        type="button"
        onClick={() => {back()}}
        disabled={historySize === 1}
    >
        δΈζζ»γ
    </button>
