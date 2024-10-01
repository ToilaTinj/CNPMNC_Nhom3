import './index.css'

export const Button = (props) => {
    return (
        <button className="button" style={{ width: `${props.width || "100%"}` }}>{/*Nếu props.width được truyền vào, nó sẽ sử dụng giá trị đó; nếu không, nó sẽ mặc định là "100%" */}
            {props.label || ""}
        </button>
    )
}