import { Button } from '../Button'
import { TextInput } from '../TextInput'
import './todo-form.style.css'

export function TodoForm() {
    return (
        <form className='todo-form'>
            <TextInput placeholder="Digite o item que deseja adicionar" />
            <Button />
        </form>
    )
}