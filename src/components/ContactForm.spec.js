import React from 'react'
import {render , fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'

describe('<ContactForm />' ,() => {
    test('renders without error',() =>{
        render(<ContactForm />);
    })

})

test('should submit the form and add an element',()=>{

    //arrange
    const {getByLabelText, getByText} = render(<ContactForm/>);
    
    //act
    const fnameInput = getByLabelText(/First Name/i);
    const lnameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/Email/i);  
    const messInput = getByLabelText(/Message/i);
    
    fireEvent.change(fnameInput , {
        target:{
            id: 'firstname' , name:'Ser'
        }
    });
    fireEvent.change(lnameInput , {
        target:{
            id: 'lastname' , name:'Jenac'
        }
    });

    fireEvent.change(emailInput , {
        target:{
            id: 'firstname' , name:'ser@ser.com'
        }
    });
    
    fireEvent.change(messInput , {
        target:{
            id: 'message' , name:'dsdsa'
        }
    });

    fireEvent.click(getByText(/submit/i));
})
