import { Button } from 'react-bootstrap'

const CustomButton = (props) => {
  return (
    <div className="mt-3">
      <Button
        className="d-none d-sm-block"
        variant={props.variant}
        onClick={props.onClick}
        href={props.btnLink}
        type={props.type}
      >
        {props.btnText}
      </Button>
      <div className="d-grid">
        <Button
          className="d-block d-sm-none"
          onClick={props.onClick}
          href={props.btnLink}
          type={props.type}
        >
          {props.btnText}
        </Button>
      </div>
    </div>
  )
}

export default CustomButton
