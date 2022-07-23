import {PracticeInitializationProps} from "../Practice";
import {PracticeCompressor} from "./PracticeCompressor";

export const v1PracticeCompressor: PracticeCompressor = {

    compress(props: PracticeInitializationProps): string {
        return JSON.stringify(props);
    },

    decompress(s: string): PracticeInitializationProps {
        return JSON.parse(s) as PracticeInitializationProps
    }
}
