import './styles.css'

const TitleCreate = function(){
    return(
        <div className="wrapper-title card-body">
            <div className="border"></div>
            <input type="text" className='create-input create-title-input'  placeholder='Titulo'/>
            <input type="text" className='create-input create-desc-input' placeholder='descricao'/>
        </div>
    )
}

export default TitleCreate