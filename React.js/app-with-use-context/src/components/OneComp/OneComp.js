import { useContext } from "react"
import { MainValue } from "../../ContextValue"

export default function OneComp(){
    const val = useContext(MainValue);

    return<div>
        This is OneComp components , and her value of contetx is: {val}
    </div>
}