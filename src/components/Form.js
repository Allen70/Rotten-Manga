import { Select } from './Select'
export function Form({submitAction, manga, title, input}) {
    
    title = title? title : manga.title
    
    return(
        <form onSubmit={submitAction}>
            {title? <h2>{title}</h2>:null}
            <div className='select-styling'>
                <Select label='Overall Rating'/>
                <Select label="Hero's Journey"/>
                <Select label="Power Fantasy"/>
                <Select label="World Building"/>
            </div>
            <input type='submit' value={input}/>
        </form>
    )
}