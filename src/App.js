import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css'
import actions from "./store/actions";
import { Header, SubHeader, RenderList } from './Components';

const App = (props) => {
  const {
    loadClients,
    clients = []
  } =props
  const [displayClient , setClient] = useState([])
  useEffect(()=>{
    loadClients()
  },[loadClients])

  useEffect(()=>{
    setClient(clients)
  },[clients])
  return(
    <div>
      <div className={styles.containerApp}>
        <Header/>
        <SubHeader setClient={setClient}/>
      </div>
        <RenderList displayClient ={displayClient} setClient={setClient}/>
    </div>
  )
  };

  const mapStateToProps = ({ clients }) => ({ clients });

   const mapDispatchToProps = (dispatch) => ({
    saveClient: (client) => dispatch(actions.saveClient(client)),
    loadClients: () => dispatch(actions.loadClients()),
  });


export default  connect(
  mapStateToProps,
  mapDispatchToProps
  ) (App);