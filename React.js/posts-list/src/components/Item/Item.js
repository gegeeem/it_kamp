export default function Item({ident, title, description, showBtn, showBtnFunc}){
    return(
        <li >
            <h3>{title}</h3>
            <p>{showBtn === ident ? description: ''}</p>
            <button onClick={showBtnFunc}>Show more</button>
        </li>
    )
}