import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MADE_TO_FIT } from '../../common/constants';
import styles from './style.module.css'

const Header = () => (
        <div className={styles.header}>
            <Navbar.Brand as={Link} to="/clients">{MADE_TO_FIT}</Navbar.Brand>
        </div>
);

export { Header };