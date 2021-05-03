import { makeStyles } from "@material-ui/core/styles";

export const productDetailsStyle = makeStyles((theme) => ({
  customGrid: {
    justifyContent: "center",
  },
  customText: {
    color: theme.palette.primary.main,
  },
  customCard: {
    borderStyle: "none",
    borderRadius: 3,
  },
}));
