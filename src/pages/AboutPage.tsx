import css from "./AboutPage.module.scss";

export function AboutPage() {
    return (
        <div className={css.about}>
            <h1>About</h1>
            <div className={css.content}>
                <p>落ち着いてテトリスを練習するためのページ</p>
                <p>作者: あひゃえもん</p>
                <a href="https://github.com/ahyaemon/react-tetris" target="_blank">ソースコード</a>
            </div>
        </div>
    )
}
