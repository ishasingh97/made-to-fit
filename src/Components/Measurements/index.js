import { Button, Form, Modal } from "react-bootstrap";
import styles from './style.module.css';
import { ADD_MEASUREMENTS, EDIT_MEASUREMENTS, MEASUREMENT_FORM } from "../../common/constants";
import { isEmptyObject } from "../../common/utils";

const Measurements = (props) =>{
    const {
        form = {},
        showModal = false,
        modalData = {},
        closeModal = ()=>{},
        updateMeasurement = ()=>{},
        onChangeHandler = () => {}
    } = props

    const {measurements = {}} = modalData

    const renderForm = () =>{
        return(
            Object.keys(MEASUREMENT_FORM).map((item,index)=>{
                const {label,name } = MEASUREMENT_FORM[item]
                return(
                    <div className={styles.labelWrapper} key = {name}>
                        <Form.Label
                           key = {index+'label'}
                            className="mt-2">
                            {label}
                        </Form.Label>
                        <Form.Control
                            {...item}
                             key = {index+'control'}
                            value={form[name]}
                            className={styles.form}
                            onChange={(e)=>onChangeHandler(e,name)} >
                            </Form.Control>
                    </div>
                )})       
    )}

    return(
        <Modal show={showModal} onHide={closeModal} animation={true} dialogClassName={styles.modalDialog}>
        <Modal.Header>
          <Modal.Title>{isEmptyObject(measurements) ? ADD_MEASUREMENTS : EDIT_MEASUREMENTS}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
        {renderForm()}
        </Modal.Body>
        <Modal.Footer>
            
          <Button  size="sm"  variant="outline-secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className={styles.button} size="sm" variant="outline-primary" onClick={updateMeasurement}>
          {isEmptyObject(measurements) ?  'Add' : 'Edit'}
          </Button>
        </Modal.Footer>
        </Modal>
    )
}

export {Measurements};
