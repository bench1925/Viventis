import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const RequiredAsterisk = () => (<span style={{color: "red"}}>*</span>)

/**
 *
 * @param {*} params.tournament
 * @param {*} params.mode
 * @param {*} params.onSubmit
 * @returns
 */
export default function TournamentForm ({ tournament = {}, mode = "create", onSubmit }) {
    const [name, setName] = useState(tournament && tournament.name ? tournament.name : "");
    const [description, setDescription] = useState(tournament && tournament.description ? tournament.description : "");
    const [tournamentType, setTournamentType] = useState(tournament && tournament.tournament_type ? tournament.tournament_type : "");
    const [isSubmitting, setSubmitting] = useState(false);
    const [errorMessageText, setErrorMessageText] = useState("");
    const [successMessageText, setSuccessMessageText] = useState("");
    const [validationErrorText, setValidationErrorText] = useState("");

    useEffect(() => {

    }, []);

    function handleOnSubmit (e) {
        e.preventDefault();

        const values = {
            "name": name,
            "description": description,
            "tournament_type" : tournamentType
        };

        const missingRequiredFields = [];

        if(values.name === "") {
            missingRequiredFields.push("Name");
        }

        if(values.tournament_type === "") {
            missingRequiredFields.push("Tournament type");
        }

        if(missingRequiredFields.length > 0) {
            setValidationErrorText(`These fields are required: ${missingRequiredFields.join(",")}`);
        }
        else {
            setSubmitting(true);
            setSuccessMessageText("");
            setErrorMessageText("");
            setValidationErrorText("");

            onSubmit(values, (err) => {
                setSubmitting(false);

                if(err) {
                    if(err.response.data.errors.length > 0) {
                        setErrorMessageText(err.response.data.errors.join(","));
                    }
                    else {
                        setErrorMessageText("Something went wrong");
                    }
                }
                else {
                    setSuccessMessageText(mode === "create" ? "New tournament has been added" : "Tournament has been updated");
                    if(mode === "create") {
                        resetFields();
                    }
                }
            });
        }
    }

    function handleOnChange (e) {
        const value = e.target.value, name = e.target.name;
        if(name === "name") {
            setName(value);
        }
        else if(name === "description") {
            setDescription(value);
        }
        else if(name === "tournament_type") {
            setTournamentType(value);
        }
    }

    function resetFields () {
        setName("");
        setDescription("");
        setTournamentType("");
    }

    const actions = { onChange: handleOnChange };

    const submitButtonText = mode === "create" ? "Create Tournament" : "Save Changes";

    return <Form onSubmit={handleOnSubmit} data-testid="tournament-form">
        { errorMessageText !== "" && <Alert variant="danger" data-testid="tournament-form-api-error">{errorMessageText}</Alert> }

        { validationErrorText !== "" && <Alert variant="danger" data-testid="tournament-form-validation-error">{validationErrorText}</Alert> }

        { successMessageText && <Alert variant="success" data-testid="tournament-form-success">{successMessageText}</Alert> }

        <Form.Group className="mb-3">
            <Form.Label>Tournament Name <RequiredAsterisk/></Form.Label>
            <Form.Control placeholder="Tournament Name" name="name" value={name} data-testid="tournament-form-name" {...actions}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" name="description" value={description} data-testid="tournament-form-description" {...actions}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Format <RequiredAsterisk/></Form.Label>
            <Form.Select name="tournament_type" value={tournamentType} data-testid="tournament-form-format" {...actions}>
                <option value="">Select format</option>
                <option value="single elimination">Single Elimination</option>
                <option value="double elimination">Double Elimination</option>
                <option value="round robin">Round Robin</option>
                <option value="swiss">Swiss</option>
            </Form.Select>
        </Form.Group>

        <Button variant="outline-primary" type="submit" disabled={isSubmitting ? "disabled" : null} data-testid="tournament-form-submit">{isSubmitting ? <>Saving...</> : <>{submitButtonText}</>}</Button>
    </Form>
}