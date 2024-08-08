import { TextField } from "@mui/material";

type TextFiledType = {
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextFiled({ value, onChange, label }: TextFiledType) {
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      value={value}
      onChange={onChange}
      sx={{
        border: "0.5px solid #333639",
        width: "100%",
        borderRadius: "4px",
        "& .MuiFilledInput-root": {
          border: "1px solid #333639",
          borderRadius: "4px",
          "&.Mui-focused": {
            borderColor: "#1D9BF0",
            backgroundColor: "transparent",
          },
        },
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
          {
            borderBottom: "none",
          },
      }}
      InputLabelProps={{
        sx: {
          color: "#71767b",
          fontSize: "17px",
        },
      }}
    />
  );
}
