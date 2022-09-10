import './Item.css'
export default function Item({ident, title, description, showBtn, showBtnFunc}){
    return(
        <li >
            <h3>{title}</h3>
            <p>{showBtn === ident ? description: ''}</p>
            {
                showBtn === ident ? <div className='btnShowMore' onClick={showBtnFunc}><span>-</span></div> 
                : <div className='btnShowMore' onClick={showBtnFunc}><span>+</span></div>
            }
            
        </li>
    )
}