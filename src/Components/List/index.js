import React, {  useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Eye, Trash, Scissors } from 'react-bootstrap-icons';

import { ListGroup } from 'react-bootstrap';
import styles from './style.module.css'
import actions from '../../store/actions';
import { Measurements } from '../Measurements';
import { isEmptyObject } from '../../common/utils';

const List = (props) => {
    const {
        displayClient =[],
        deleteClient = ()=>{},
        saveClient = ()=>{}
    }= props

    const [showModal, setModalView] = useState(false)
    const [modalData, setModalData] = useState({})
    const [form, setForm] =useState({})

    useEffect(()=>{
        const {measurements = {}} = modalData || {}
        !isEmptyObject(measurements)  && setForm(measurements);
    },[modalData])

    const closeModal = () =>{
        setModalView(false)
        setModalData({})
        setForm({})
      }
    
    const openModal = (item)=>{
        setModalView(true)
        setModalData(item)
    }

    const onChangeHandler = (e, fieldName)=>{
        const {value} = e.target
        setForm({...form, [fieldName] : value})
    }

    const updateMeasurement =() =>{
        saveClient({...modalData, measurements : form})
    }

    const renderClientListItem = (item) =>{
    const { id, name, phone, measurements={} } = item
    return (
        <ListGroup.Item key={id} className="d-flex justify-content-between align-items-center">
            <span className= {styles.name}>{name}</span>
            <span className= {styles.name}>{phone}</span>
            {isEmptyObject(measurements)?
            <Scissors className={styles.view} onClick={()=>openModal(item)}/>:
            <Eye className={styles.view} onClick={()=>openModal(item)}/>
            }
            <Trash className={styles.trash}  onClick={()=>deleteClient(id)} />             
        </ListGroup.Item>
        )
    }

    const renderEmptyView = () =>
    (
        <ListGroup.Item>
            <h3 className="text-muted text-center">No clients added</h3>
        </ListGroup.Item>
    );

    return (
        <ListGroup className={styles.listGroup} variant="flush">
            {displayClient ? displayClient.map(renderClientListItem) : renderEmptyView()}
            <Measurements
            form = {form}
            showModal = {showModal}
            modalData = {modalData}
            closeModal = {closeModal}
            onChangeHandler = {onChangeHandler}
            updateMeasurement = {updateMeasurement}
            />
        </ListGroup>
    )
};

const mapDispatchToProps = (dispatch) => ({
    deleteClient: (id) => dispatch(actions.deleteClient(id)),
    saveClient: (client) => dispatch(actions.saveClient(client))
  });


export const RenderList = connect(
  null,
  mapDispatchToProps)(List)