import { useState } from "react";
import GenericForm from "../Common/Forms/formlayout";


const TopUp=()=>{
    const [formData, setFormData]=useState({
        payment_code: '',
        Amount: ''
    }
    )
    const fields = [
        { name: 'Paymentid', label: 'Payment Code', type: 'text', required: true },
        
        { name: 'Amount', label: 'Amount', type: 'text', required: true 
          }
    ];

    const handleSubmit=()=>{

    }

    return(
        <>
        <h1>Top Up Payment</h1>
        <GenericForm 
        formData={formData}
        fields={fields}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        />
        </>
    )
    
}

export default TopUp