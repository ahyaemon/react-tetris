import { slide as BurgerMenu } from "react-burger-menu";

export function Menu() {
    return (
        <div>
            <BurgerMenu width="280px">
                <p>メインコンテンツ</p>
                <p>テンプレ練習</p>
                <p>About</p>
            </BurgerMenu>
        </div>
    )
}
