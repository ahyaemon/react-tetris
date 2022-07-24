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

const practiceParameters: { title: string, queryString: string }[] = [
    {
        title: "TSD → TSD",
        queryString: "v=1&p=eJyNjUsOwkAMQ%2B%2BSdYOcTD5ML9NDwA5xd9JpVVGpSHhhvYX1%2FKIHzT3CYbd7a%2BgZPXKiJ80EICKqwQK0FrZjsZk7iyArhcuPraoeW%2F3abkk%2BY%2F3DPdkGx0BbvRVhseEVkT8M43g36IWB3h%2FnTDKU",
    },
    {
        title: "DT砲",
        queryString: "v=1&p=eJytjTsSAkEIBe9C7GwBj4%2FuZTyEZtbeXWacXRNNLAmoDqD7QTdaxczzvMAvcFWN9BPdaSXuY301ZhE2eyELUJgtgkUB90Lmes2JdZpANvciyQA6ihRGXH%2F1Fhxe%2Febtk20PTByFHLXiLpu14f1Y%2B4dXD6%2Fq26u7l7Ynk4pMwA%3D%3D",
    }
]

export function Menu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div
            css={css({
                lineHeight: "2",
            })}
        >
            <BurgerMenu width="280px" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
                <ul>
                    <li>
                        <LinkWithClose to="/" title="エンドレス" setIsOpen={setIsOpen}/>
                    </li>
                    <li>
                        テンプレ練習
                        <ul>
                            {
                                practiceParameters.map(p => (
                                    <li key={p.title}>
                                        <LinkWithClose to={`/practice?${p.queryString}`} title={p.title} setIsOpen={setIsOpen}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    <li>
                        <LinkWithClose to="/about" title="About" setIsOpen={setIsOpen}/>
                    </li>
                </ul>
            </BurgerMenu>
        </div>
    )
}
