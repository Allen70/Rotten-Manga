import { Select } from './Select'
export function Form({submitAction, manga, title, input}) {
    let id = ""
    if (typeof(manga)!= 'undefined'){
        id = manga.id ? manga.id : ''
    }
    title = title ? title : manga.title

    return(
        <form className='form' onSubmit={submitAction}>
            {title? <h2>{title}</h2>:null}
            <div className='select-styling'>
                {id?<input type='number' style={{position: 'absolute', visibility: 'hidden'}} name='id' value={id} readOnly/>:null}
                <Select label='Overall Rating'/>
                <Select label="Hero's Journey"/>
                <Select label="Power Fantasy"/>
                <Select label="World Building"/>
            </div>
            <input type='submit' value={input}/>
        </form>
    )
}