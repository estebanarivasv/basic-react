import { PropTypes } from "prop-types"
import Button from "./Button"


export const Header = (props) => {

  const onClick = () => {
    console.log("click")
  }

  return (
    <header>
        <h1>{props.title}</h1>
        <Button color="green" text="Add" onClick={onClick}/>
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
