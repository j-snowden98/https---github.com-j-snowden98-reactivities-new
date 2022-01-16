import { Formik, Form } from "formik";
import * as Yup from 'yup';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default function ProfileEditForm({setEditMode}: Props) {
    const validationSchema = Yup.object({
        displayName: Yup.string().required()
    })

    const {profileStore: {profile, updateProfile}} = useStore();

    return (
        <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={{displayName: profile?.displayName, bio: profile?.bio}} 
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                })
            }}>
            {({ isValid, isSubmitting, dirty }) => (
                <Form className='ui form'>
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextArea  rows={3} placeholder='Add your bio' name='bio' />
                    <Button 
                        disabled={isSubmitting || !dirty || !isValid}
                        loading={isSubmitting}
                        floated='right' 
                        positive 
                        type='submit' 
                        content='Submit' />
                </Form>
            )}
        </Formik>
    )
}