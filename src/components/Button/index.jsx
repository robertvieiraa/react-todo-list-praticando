import './button.style.css'

export function Button({ children }) {
    return (
        <button className='btn'>{children}</button>
    )
}