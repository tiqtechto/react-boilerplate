import React from 'react';
import InputGroup  from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import useFormPersist from "react-hook-form-persist";
import { BsExclamationTriangle } from 'react-icons/bs';

import PasswordField from './PasswordField';

const Register = (props) =>{
    const register = props.register;
    const watch = props.watch;
    const setValue = props.setValue;
    const getValues = props.getValues;
    const errors = props.errors;

    useFormPersist("register", { watch, setValue, exclude: ['password', 'repassword'] });

        return(
            <div className='px-2'>
            <div className='d-block d-md-flex justify-content-between align-items-baseline'>
                <Form.Group className="mb-2 mb-md-3 me-0 me-md-2" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className={`rounded-pill bg-gray-100 border-primary-subtle ${errors.firstName ? 'invalid' : ''}`} type="text" {...register('firstName',{pattern: /^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)/, required: true, minLength: 3, maxLength: 50 })}
                        placeholder="Vidhya" disabled={props.disabled ? true : false} />

                {errors?.firstName?.type === "required" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> This field is required!</p>}
                {errors?.firstName?.type === "pattern" && (
                <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> First name is not valid!</p>
                )}

                {errors?.firstName?.type === "maxLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> First name is too large!</p>}
                {errors?.firstName?.type === "minLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> First name is too short!</p>}
                </Form.Group>
        
                <Form.Group className="mb-2 mb-md-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className={`rounded-pill bg-gray-100 border-primary-subtle ${errors.lastName ? 'invalid' : ''}`} type="text" {...register('lastName',{pattern: /^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)/, required: true, minLength: 3, maxLength: 50 })}
                        placeholder="Guru" disabled={props.disabled ? true : false} />

                {errors?.lastName?.type === "required" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> This field is required!</p>}
                {errors?.lastName?.type === "pattern" && (
                <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Last name is not valid!</p>
                )}

                {errors?.lastName?.type === "maxLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Last name is too large!</p>}
                {errors?.lastName?.type === "minLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Last name is too short!</p>}
                </Form.Group>
            </div>

            <Form.Group className="mb-2 mb-md-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control className={`rounded-pill bg-gray-100 border-primary-subtle ${errors.emailR ? 'invalid' : ''}`} type="email" {...register('emailR', {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, required: true})}
                    placeholder="name@example.com" disabled={props.disabled ? true : false} />

                {errors?.emailR?.type === "required" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> This field is required</p>}
                {errors?.emailR?.type === "pattern" && (
                <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Email is not valid</p>
                )}
            </Form.Group>
            

            <Form.Group className="mb-2 mb-md-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <PasswordField required={true} fname="password" register={props.register} setValue={props.setValue} errors={props.errors} disabled={props.disabled} />
                </InputGroup>
                {errors?.password?.type === "required" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> This field is required</p>}
                {errors?.password?.type === "pattern" && (
                    <p className='error-text text-danger me-1'><BsExclamationTriangle className='me-1' /> Password requirement of at least one symbol and at least one numeric value!</p>
                    )}
                {errors?.password?.type === "maxLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Password is too large!</p>}
                {errors?.password?.type === "minLength" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> Password is too short!</p>}
            </Form.Group>

            <Form.Group className="mb-2 mb-md-3" controlId="repassword">
                <Form.Label>Repeat Password</Form.Label>
                <InputGroup>
                    <PasswordField required={true} fname="repassword" register={props.register} setValue={props.setValue} errors={props.errors} disabled={props.disabled} />
                </InputGroup>
                
                {(() => {
                    {errors?.password?.type === "required" && <p className='error-text text-danger me-1'>
                    <BsExclamationTriangle className='me-1' /> This field is required</p>}
                    if(errors?.repassword?.type === "maxLength"){
                        return(<p className='error-text text-danger me-1'>
                        <BsExclamationTriangle className='me-1' /> RePassword is too large!</p>);
                    } 
                    else if(errors?.repassword?.type === "minLength"){
                        return(<p className='error-text text-danger me-1'>
                        <BsExclamationTriangle className='me-1' /> RePassword is too short!</p>);
                    }
                    else if(getValues('password') !== '' && getValues('repassword') !== '' && getValues('password') !== getValues('repassword')){
                        return(<p className='error-text text-danger me-1'>
                        <BsExclamationTriangle className='me-1' /> Oops! Passwords don't match. Please re-enter.</p>);
                    }
                })()}
                
            </Form.Group>
            </div>
        );
}

export default Register;