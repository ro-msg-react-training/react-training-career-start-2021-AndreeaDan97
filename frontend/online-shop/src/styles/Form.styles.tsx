import { makeStyles } from "@material-ui/core/styles";

export const formStyle = makeStyles((theme) => ({
  customForm: {
    marginBottom: "40px",
  },
  customFormControl: {
    margin: "20px 0",
  },
  customButton: {
    display: "inlineBlock",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: "inherit",
  },
}));
