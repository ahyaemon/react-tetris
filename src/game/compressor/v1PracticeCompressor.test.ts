import {
    compressTemplates,
    decompressTemplates, deflateStringToEncodedUri, inflateEncodedUri,
    v1PracticeCompressor
} from "./v1PracticeCompressor";
import {PracticeInitializationProps} from "../Practice";
import {Cell} from "../cell";

const props: PracticeInitializationProps = {
    templates:[
        [
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.OrangeTemplate,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.GreenTemplate,Cell.None,Cell.None,Cell.None],
            [Cell.OrangeTemplate,Cell.None,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.GreenTemplate,Cell.GreenTemplate,Cell.YellowTemplate,Cell.YellowTemplate],
            [Cell.OrangeTemplate,Cell.OrangeTemplate,Cell.None,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.GreenTemplate,Cell.YellowTemplate,Cell.YellowTemplate]
        ],
        [
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.OrangeTemplate,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.GreenTemplate,Cell.None,Cell.None,Cell.None],
            [Cell.OrangeTemplate,Cell.PurpleTemplate,Cell.PurpleTemplate,Cell.PurpleTemplate,Cell.RedTemplate,Cell.RedTemplate,Cell.GreenTemplate,Cell.GreenTemplate,Cell.YellowTemplate,Cell.YellowTemplate],
            [Cell.OrangeTemplate,Cell.OrangeTemplate,Cell.PurpleTemplate,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.LightBlueTemplate,Cell.GreenTemplate,Cell.YellowTemplate,Cell.YellowTemplate]
        ],
        [
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.LightBlueTemplate],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.LightBlueTemplate],
            [Cell.None,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.None,Cell.None,Cell.YellowTemplate,Cell.YellowTemplate,Cell.LightBlueTemplate],
            [Cell.GreenTemplate,Cell.None,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.YellowTemplate,Cell.YellowTemplate,Cell.LightBlueTemplate],
            [Cell.GreenTemplate,Cell.GreenTemplate,Cell.None,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.OrangeTemplate],
            [Cell.OrangeTemplate,Cell.GreenTemplate,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.GreenTemplate,Cell.OrangeTemplate,Cell.OrangeTemplate,Cell.OrangeTemplate]
        ],
        [
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.LightBlueTemplate],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.LightBlueTemplate],
            [Cell.None,Cell.None,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.None,Cell.None,Cell.YellowTemplate,Cell.YellowTemplate,Cell.LightBlueTemplate],
            [Cell.GreenTemplate,Cell.PurpleTemplate,Cell.PurpleTemplate,Cell.PurpleTemplate,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.YellowTemplate,Cell.YellowTemplate,Cell.LightBlueTemplate],
            [Cell.GreenTemplate,Cell.GreenTemplate,Cell.PurpleTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.BlueTemplate,Cell.OrangeTemplate],
            [Cell.OrangeTemplate,Cell.GreenTemplate,Cell.None,Cell.RedTemplate,Cell.RedTemplate,Cell.BlueTemplate,Cell.GreenTemplate,Cell.OrangeTemplate,Cell.OrangeTemplate,Cell.OrangeTemplate]
        ],
        [
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None],
            [Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None,Cell.None]
        ]
    ],
    seed:966504.8330976967
}


test("templates の圧縮と解凍ができる", () => {
    const compressed = compressTemplates(props.templates)
    const decompressed = decompressTemplates(compressed)
    expect(decompressed).toStrictEqual(props.templates)
})

test("文字列の圧縮と解凍ができる", () => {
    const s = `{"s":966504.8330976967,"t":"0006660000-1003364000-1000334455-1107777455_0006660000-1003364000-1222334455-1127777455_0000000007-0000000007-0003300557-4000336557-4406666661-1403364111_0000000007-0000000007-0003300557-4222336557-4426666661-1403364111_"}`
    const compressed = deflateStringToEncodedUri(s)
    console.log({length: compressed.length, compressed})
    const decompressed = inflateEncodedUri(compressed)
    expect(decompressed).toStrictEqual(s)
})

test("PracticeInitializationProps の圧縮と解凍ができる", () => {
    const compressed = v1PracticeCompressor.compress(props)
    const decompressed = v1PracticeCompressor.decompress(compressed)
    expect(decompressed).toStrictEqual(props)
})

test("URIEncode", () => {
    const s = "+=/"

    const encoded1 = encodeURI(s)
    // 変換されない
    expect(encoded1).toStrictEqual(s)

    const encoded2 = encodeURIComponent(s)
    // 変換される
    expect(encoded2).toStrictEqual("%2B%3D%2F")
    expect(decodeURIComponent(encoded2)).toStrictEqual(s)
})
