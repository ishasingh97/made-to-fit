import { Fragment } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import clientStyles from './style.module.css';
import { CREATE_CLIENT, CREATE_FORM } from "../../common/constants";

const CreateClient = (props) =>{
    const {
        form = {},
        validated = false,
        showModal = false,
        closeModal = ()=>{},
        createClient = ()=>{},
        onChangeHandler = () => {}
    } = props

    const renderForm = () =>{
        return(
            CREATE_FORM.map((item,index)=>{
                const {label,name, options = []} = item
                return(
                    <Fragment key = {name}>
                        <Form.Label
                           key = {index+'label'}
                            className="mt-2">
                            {label}
                        </Form.Label>
                        <Form.Control
                            {...item}
                           key = {index+'control'}
                            value={form[name]}
                            onChange={(e)=>onChangeHandler(e,name)} >
                        {renderOption(options)}
                            </Form.Control>
                    </Fragment>
                )})       
    )}

    const renderOption = (options = []) =>{
        if(Array.isArray(options) && !options.length) return null
        return(
            options.map((option,index)=>{
                const {text} = option
                return(<option key = {index} {...option}>{text}</option>)
            })
        )
    }

    return(
        <Modal show={showModal} onHide={closeModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{CREATE_CLIENT}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {renderForm()}
        </Modal.Body>
        <Modal.Footer>
          {!validated ? <div className={clientStyles.errorMessage}>Please enter valid details</div> :null }
          <Button  size="sm"  variant="outline-secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className={clientStyles.button} size="sm" variant="outline-primary" onClick={createClient}>
            Create
          </Button>
        </Modal.Footer>
        </Modal>
    )
}

export {CreateClient};
