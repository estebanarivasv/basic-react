import { PropTypes } from "prop-types"
import Button from "./Button"


export const Header = ({title, onAdd}) => {

  return (
    <header>
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onAdd}/>
    </header>
  )

}

Header.defaultProps = {
  title: "Tasks tracker"
}

// Properties typing
Header.propTypes = {
  title: PropTypes.string,
}
