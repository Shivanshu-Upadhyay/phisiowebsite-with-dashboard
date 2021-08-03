import React from 'react';
import { addIncomeData } from "../../../actions/incomeAction";
import { Form, Field } from "react-final-form";
import SaveIcon from "@material-ui/icons/Save";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";

function Income(props) {

    const handleIncomeSubmit = (formValues) => {
        props.handleClose();
        console.log(formValues)
        props.addIncomeData(formValues);
    };

    return (
        <Form onSubmit={handleIncomeSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="ui form" style={{ width: '20rem' }}>
                    <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={12}>
                            <div>
                                <Field name="itemName">
                                    {({ input, meta }) => (
                                        <div>
                                            <label  > Name </label>

                                            <input type="text" {...input} placeholder="" pattern="[a-zA-Z][a-zA-Z\s]*" required />
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div>
                                <Field name="description">
                                    {({ input }) => (
                                        <div>
                                            <label >Description</label>

                                            <textarea
                                                {...input}
                                                placeholder=""

                                                minlength="5"
                                                required style={{ height: '1rem' }} />
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div>
                                <Field name="amount">
                                    {({ input }) => (
                                        <div>
                                            <label className="name">Amount(Rs)</label>
                                            <input type="text" {...input} placeholder="(₹)" pattern="[0-9]+" required />
                                        </div>
                                    )}
                                </Field>
                            </div>


                        </Grid>
                    </Grid>


                    <DialogActions className='text-center'>

                        <Button
                            className="ui primary button"
                            variant="contained"
                            // color="primary"
                            size="large"
                            type="submit"
                            autoFocus


                            autoFocus
                        >
                            Save
                        </Button>


                        <Button className="ui button mr-5"
                            autoFocus
                            onClick={props.handleClose}
                            variant="contained"
                            // color="secondary"
                            size="large"
                        >
                            Cancel
                        </Button>

                    </DialogActions>
                </form>
            )}
        </Form>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    };
};



export default connect(mapStateToProps, {
    addIncomeData,

})(Income);