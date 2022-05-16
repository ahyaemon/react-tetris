/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export function AboutPage() {
    return (
        <div
            css={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px",
                maxWidth: "400px",
            })}
        >
            <h1>About</h1>
            <div
                css={css({
                    marginTop: "20px",
                })}
            >
                <p>落ち着いてテトリスを練習するためのページ</p>
                <p>作者: あひゃえもん</p>
                <a href="https://github.com/ahyaemon/react-tetris" target="_blank">ソースコード</a>
            </div>
        </div>
    )
}
