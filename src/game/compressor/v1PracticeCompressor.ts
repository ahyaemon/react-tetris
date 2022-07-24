import {PracticeInitializationProps} from "../Practice";
import {PracticeCompressor} from "./PracticeCompressor";
import * as Zlib from "zlib";
import {Cell, createEmptyRows} from "../cell";
import {BoardTemplate} from "../BoardTemplate";

const cellToNumberTuples: [Cell, number][] = [
    [Cell.None, 0],
    [Cell.OrangeTemplate, 1],
    [Cell.PurpleTemplate, 2],
    [Cell.RedTemplate, 3],
    [Cell.GreenTemplate, 4],
    [Cell.YellowTemplate, 5],
    [Cell.BlueTemplate, 6],
    [Cell.LightBlueTemplate, 7],
]

const cellToNumberMap = new Map(cellToNumberTuples)

const numberToCellMap = new Map(cellToNumberTuples.map(it => [it[1], it[0]]))

// export for test
export function compressTemplates(templates: BoardTemplate[]): string {
    return templates.map(rows => {
        return rows.map(cells => {
            return cells.map(cell => {
                return cellToNumberMap.get(cell)
            }).join("")
        }).filter(line => line !== "0000000000").filter(line => line.length > 0).join("-")
    }).join("_")
}

function addEmptyRows(ar: string[], totalRowAmount: number): string[] {
    const n = totalRowAmount - ar.length
    return Array(n).fill("0000000000").concat(ar)
}

// export for test
export function decompressTemplates(s: string): BoardTemplate[] {
    const result = s.split("_")
        .filter(sboard => sboard !== "")
        .map(srows => srows.split("-"))
        .map(srows => addEmptyRows(srows, 20))
        .map(srows =>
            srows.map(srow =>
                srow.split("").map(scell =>
                    numberToCellMap.get(parseInt(scell))!
                )
            )
        )
    return result.concat([createEmptyRows(20, 10)])
}

// export for test
export function deflateStringToEncodedUri(s: string): string {
    const compressed = Zlib.deflateSync(s)
    const base64 = compressed.toString("base64")
    return encodeURIComponent(base64);
}

// export for test
export function inflateEncodedUri(s: string): string {
    const buffer = Buffer.from(decodeURIComponent(s), 'base64')
    return Zlib.inflateSync(buffer).toString()
}

export const v1PracticeCompressor: PracticeCompressor = {

    compress(props: PracticeInitializationProps): string {
        const newProps = {
            s: props.seed,
            t: compressTemplates(props.templates)
        }
        const s = JSON.stringify(newProps)
        return deflateStringToEncodedUri(s)
    },

    decompress(s: string): PracticeInitializationProps {
        const decompressed = inflateEncodedUri(s)
        const json = JSON.parse(decompressed) as { s: number, t: string }
        return {
            seed: json.s,
            templates: decompressTemplates(json.t)
        }
    }
}
