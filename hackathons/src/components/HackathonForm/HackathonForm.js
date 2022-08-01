import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const HackathonForm = ({receiveHackathon})=>{
    
    const [hackathon, setHackathon] = useState({})
    const [errors, setErrors] = useState({})

    const handleChange = (name, value)=>{
        setHackathon(prev => ({...prev, [name]: value}))
        if(!!errors[name]){
            setErrors({...errors, [name]:null})
        }
    }

    const validateForm = ()=> {
        const {name, submissionStartDate, submissionEndDate, website, image, description, organizator, prize} = hackathon
        const newErrors = {}
        if(!name || name==="")newErrors.name = "Please write the hackathon's name"
        if(!submissionStartDate || submissionStartDate==="")newErrors.submissionStartDate = "Please enter the hackathon's starting date"
        if(!submissionEndDate || submissionEndDate==="")newErrors.submissionEndDate = "Please write the hackathon's name"
        if(!website || website==="")newErrors.website = "Please write the hackathon's website url"
        if(!image || image==="")newErrors.image = "Please write the hackathon's image url"
        if(!description || description==="")newErrors.description = "Please write the hackathon's description"
        else if(description.length<10){
            newErrors.description = "Description is too short"
        }
        if(!organizator || organizator==="")newErrors.organizator = "Please write the hackathon's name"
        if(!prize || prize==="")newErrors.prize = "Please write the hackathon's name"

        return newErrors
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const formErrors = validateForm()

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }
        else{
            receiveHackathon(hackathon)
        }
    }

    return(
       <>
        <Form>
            <Form.Group controlId="name" className="mb-3">
                <Form.Label>Hackathon Name</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's name"
                    value={hackathon.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    isInvalid={!!errors.name}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="submissionStartDate" className="mb-3">
                <Form.Label>Submission Start Date</Form.Label>
                <Form.Control
                    type="date" 
                    placeholder="Enter the hackathon's submission start date"
                    value={hackathon.submissionStartDate}
                    onChange={(e) => handleChange("submissionStartDate", e.target.value)}
                    isInvalid={!!errors.submissionStartDate}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.submissionStartDate}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="submissionEndDate" className="mb-3">
                <Form.Label>Submission Deadline</Form.Label>
                <Form.Control
                    type="date" 
                    placeholder="Enter the hackathon's submission deadline"
                    value={hackathon.submissionEndDate}
                    onChange={(e) => handleChange("submissionEndDate", e.target.value)}
                    isInvalid={!!errors.submissionEndDate}                    
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.submissionEndDate}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="website" className="mb-3">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's website url"
                    value={hackathon.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    isInvalid={!!errors.website}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.website}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="image" className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's image url"
                    value={hackathon.image}
                    onChange={(e) => handleChange("image", e.target.value)}
                    isInvalid={!!errors.image}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.image}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's description"
                    value={hackathon.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    isInvalid={!!errors.description}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.description}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="organizator" className="mb-3">
                <Form.Label>Organizator</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's organizator"
                    value={hackathon.organizator}
                    onChange={(e) => handleChange("organizator", e.target.value)}
                    isInvalid={!!errors.organizator}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.organizator}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="prize" className="mb-3">
                <Form.Label>Prize</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter the hackathon's prize"
                    value={hackathon.prize}
                    onChange={(e) => handleChange("prize", e.target.value)}
                    isInvalid={!!errors.prize}
                ></Form.Control>
                <Form.Control.Feedback>
                    {errors.prize}
                </Form.Control.Feedback>
            </Form.Group>

            <Button onClick={handleSubmit} variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
       </>
    )

}

export default HackathonForm;