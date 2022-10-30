import React from 'react'
import {Row, Col, Input, Typography, Button} from 'antd'
import './styles.css'

const Form = () => {
    const { Text} = Typography
    const {Password} = Input
  return (
    <Row gutter={[0, 20]} align='middle' justify='center' className='parent'>
        <Col span={24}>
            <Text>Email</Text>
            <Input  className='my-input' />
        </Col>
        <Col span={24}>
            <Text>Password</Text>
            <Password className='my-input' />
        </Col>
        <Col span={24}>
            <Button className='signinBtn'>Sign in</Button>
        </Col>
    </Row>
  )
}


export default Form