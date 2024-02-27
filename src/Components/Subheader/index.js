import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

import { saveClient, getClients } from "../../db";
import actions from "../../store/actions";
import clientStyles from './style.module.css';
import { CreateClient } from "./createClient";
import { isFormValid } from "../../common/utils";
import { CREATE_CLIENT, INITIAL_CREATE } from "../../common/constants";

const Subheader = (props) =>{
  const {
    clients = [],
    setClient = ()=> {},
  } = props
  const [showModal, setModalView] = useState(false)
  const [form, setForm] =useState({...INITIAL_CREATE})
  const [validated, setValidated] = useState(true)


  const closeModal = () =>{
    setModalView(false)
    setValidated(true)
    setForm({...INITIAL_CREATE})
    getClients()
  }

  const createClient = () => {
    if(!isFormValid(form,setValidated)) return 
    saveClient(form).then(() => closeModal());
  };

  const onChangeHandler = (e, field='') => {
    const {value} = e.target
    const tempForm = {...form};
    tempForm[field] = value.trim();
    setValidated(true)
    setForm({...form,...tempForm})
  }

  const handleSearch = (e)=>{
      const {value} = e.target
      const tempArray = []
      Array.isArray(clients) && clients.length && clients.filter((item)=>{
        const {name}=item
        if(name.toLowerCase( ).includes(value.toLowerCase())) tempArray.push(item);
      })
      setClient(tempArray)
  }

    return(
            <div className={clientStyles.wrapper}>
            <Form.Control
              type="text"
              className={clientStyles.search}
              placeholder="Search..."
              // value={searchText}
              onChange={handleSearch}
            />
             <Button size="sm" className={clientStyles.button} variant="outline-primary" onClick={()=>{setModalView(true)}}>
                {CREATE_CLIENT}
            </Button>
            <CreateClient 
            showModal = {showModal} 
            closeModal = {closeModal} 
            validated = {validated}
            onChangeHandler = {onChangeHandler}
            isFormValid = {isFormValid}
            createClient ={createClient}/>
            </div>
    )
}

  const mapStateToProps = ({ clients }) => ({ clients });

  const mapDispatchToProps = (dispatch) => ({
    saveClient: (client) => dispatch(actions.saveClient(client)),
    getClients: () => dispatch(actions.loadClients()),
    deleteClient: (id) => dispatch(actions.deleteClient(id))
  });

  export const SubHeader = connect(
    mapStateToProps,
    mapDispatchToProps)(Subheader)