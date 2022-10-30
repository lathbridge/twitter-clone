import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography} from 'antd'
import Logo from '../../assets/logo.png'
import './styles.css'

const Header = () => {
    const {Title, Text} = Typography
  return (
    <Row className='parent' style={{marginBottom: 50}} gutter={[0, 40]}>
        <Col span={24} style={{display:'flex', justifyContent: 'center'}}>
            <img src={Logo} width={60}/>
        </Col>
        <Col span={24} style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Title level={3}>SignIn</Title>
            <Text>New Here? <Link to={'/signup'} style={{marginLeft: 30}}>Create Account</Link></Text>
        </Col>
    </Row>
  )
}

export default Header