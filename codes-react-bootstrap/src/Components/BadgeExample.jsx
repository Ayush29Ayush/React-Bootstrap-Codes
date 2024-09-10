import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const BadgeExample = () => {
  return (
    <div>
        <Badge bg="info">Info</Badge>
        <br />
        <Button variant='primary'>Click Me! <Badge bg="secondary"> 2</Badge></Button>
        <br />
        <Badge pill bg="danger">404</Badge>
    </div>
  )
}

export default BadgeExample