import {PracticeInitializationProps} from "../Practice";

export type PracticeCompressor = {
    compress: (props: PracticeInitializationProps) => string
    decompress: (s: string) => PracticeInitializationProps
}
