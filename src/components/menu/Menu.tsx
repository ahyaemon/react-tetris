import { slide as BurgerMenu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useState} from "react";
import css from "./Menu.module.scss";

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
        queryString: "v=1&p=eJx1jTEOhDAMBP%2FimqBdx7EDn%2BER0KH7%2B5kIoSuOLawpZten7LLWpQds9sU7YET3SQ5ZBYC750UhUKvbjclmrRUSkUncXlxVfVz9cTNxCWMLkdVig6O1RLvGElloY4zkW228uGv6pyafL%2FuULqE%3D",
    },
    {
        title: "DT砲",
        queryString: "v=1&p=eJytjUEOAkEIBP%2FC2TFAA7PZz%2FiI9Wb8uz2rs170YiSEVAJU32STtWyJ0HOZsnNJnOQqq%2BioGKOpmmnEE9UAYm9Vag5kElXdvb%2BQpx3oLZNkvYCBZsSqy69ewuH1z97Owi7LLK4nBni0pxUfI2YafV%2FS%2FuH1w%2Bv%2B9vr0yv0BV1pMzA%3D%3D",
    }
]

export function Menu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={css.menu}>
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
