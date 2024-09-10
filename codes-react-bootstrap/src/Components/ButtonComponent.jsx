import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const ButtonComponent = () => {
    const [isLoading, setLoading] = useState(false);

    const handleButtonClickAPI = () => {
        setLoading(true);
        // Simulate an API call with a 3 second delay
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      };


  return (
    <div>
        <button type="button" className="btn btn-primary mb-2">Traditional Button using bootstrap</button>
        <br />
        <Button variant='secondary' className='mb-2'>Click Me</Button>
        <br />
        <Button variant='outline-danger' className='mb-2'>Click Me</Button>
        <br />
        <Button variant='outline-dark' className='mb-2' href='https://www.google.com'>Google</Button>
        <br />
        <Button variant="primary" size="lg">Large button</Button>{' '}
        <Button variant="primary" size="md">Medium button</Button>{' '}
        <Button variant="primary" size="sm">Small button</Button>{' '}
        <br />
        <Button variant="primary" active={true}>Active button</Button>{' '}
        <Button variant="primary" disabled>Disabled button</Button>
        <br />
        <Button variant='primary' className='mt-2 mb-2' onClick={handleButtonClickAPI} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Click to call API'}
        </Button>
          
    </div>
  )
}

export default ButtonComponent