import {useSearchParams} from "react-router-dom";
import {v1PracticeCompressor} from "../../game/compressor/v1PracticeCompressor";
import {useEffect} from "react";
import {PracticeInitializationProps} from "../../game/Practice";

export function usePracticeInitializer(initialize: (props: PracticeInitializationProps) => void) {
    const [params] = useSearchParams()
    const version = parseInt(params.get("v")!)
    const props = v1PracticeCompressor.decompress(params.get("p")!)
    useEffect(
        () => {
            initialize(props)
        },
        // FIXME これだと重すぎる気がする。もっと良い一致手段を探す。
        [JSON.stringify(props)]
    )
}
