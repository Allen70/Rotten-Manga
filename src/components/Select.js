export function Select({label}){
    
    return(
        <label>
            {label}
        <select name={label} onChange={(event) => event.target.value}>
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
            <option selected value={0}>0</option>
            <option value={-1}>-1</option>
            <option value={-2}>-2</option>
            <option value={-3}>-3</option>
            <option value={-4}>-4</option>
            <option value={-5}>-5</option>
        </select>
        </label>
    )
}