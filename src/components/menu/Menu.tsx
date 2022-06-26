/** @jsxImportSource @emotion/react */

import { slide as BurgerMenu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useState} from "react";
import {css} from "@emotion/react";

type LinkWithCloseProps = {
    to: string,
    title: string,
    setIsOpen: (isOpen: boolean) => void,
}

function LinkWithClose(props: LinkWithCloseProps) {
    return <div><Link to={props.to} onClick={ () => {props.setIsOpen(false)} } >{ props.title }</Link></div>
}

export function Menu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div
            css={css({
                lineHeight: "2",
            })}
        >
            <BurgerMenu width="280px" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
                <LinkWithClose to="/" title="エンドレス" setIsOpen={setIsOpen}/>
                <LinkWithClose to="/practice" title="テンプレ練習" setIsOpen={setIsOpen}/>
                <LinkWithClose to="/about" title="About" setIsOpen={setIsOpen}/>
            </BurgerMenu>
        </div>
    )
}
