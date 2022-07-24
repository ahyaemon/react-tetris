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

const practiceParameter = "v=1&p=eJyNjUsOwkAMQ%2B%2BSdYOcTD5ML9NDwA5xd9JpVVGpSHhhvYX1%2FKIHzT3CYbd7a%2BgZPXKiJ80EICKqwQK0FrZjsZk7iyArhcuPraoeW%2F3abkk%2BY%2F3DPdkGx0BbvRVhseEVkT8M43g36IWB3h%2FnTDKU"

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
                <LinkWithClose to={`/practice?${practiceParameter}`} title="テンプレ練習" setIsOpen={setIsOpen}/>
                <LinkWithClose to="/about" title="About" setIsOpen={setIsOpen}/>
            </BurgerMenu>
        </div>
    )
}
