import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SELECT_DAY } from "@/constants/select_day";

export default function DateSelector() {
  return (
    <div className="my-4 w-full flex items-center gap-4">
      <FormControl variant="filled" sx={{ flex: 3 }}>
        <InputLabel
          id="month-label"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "#71767b",
            fontSize: "13px",
            transform: "translate(0, 0) scale(1)",
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        >
          월
        </InputLabel>
        <Select
          labelId="month-label"
          sx={{
            border: "0.5px solid #333639",
            borderRadius: "4px",
            position: "relative",
            paddingTop: "4px",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiFilledInput-root": {
              border: "1px solid #333639",
              borderRadius: "4px",
              "&.Mui-focused": {
                borderColor: "#1D9BF0",
                backgroundColor: "transparent",
              },
            },
            "&:focus .MuiInputLabel-root": {
              color: "#1D9BF0",
            },
            "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
              {
                borderBottom: "none",
              },
          }}
        >
          {SELECT_DAY.month.map((m) => (
            <MenuItem key={m.value} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ flex: 1.5 }}>
        <InputLabel
          id="day-label"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "#71767b",
            fontSize: "13px",
            transform: "translate(0, 0) scale(1)",
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        >
          일
        </InputLabel>
        <Select
          labelId="day-label"
          sx={{
            border: "0.5px solid #333639",
            borderRadius: "4px",
            position: "relative",
            paddingTop: "4px",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiFilledInput-root": {
              border: "1px solid #333639",
              borderRadius: "4px",
              "&.Mui-focused": {
                borderColor: "#1D9BF0",
                backgroundColor: "transparent",
              },
            },
            "&:focus .MuiInputLabel-root": {
              color: "#1D9BF0",
            },
          }}
        >
          {SELECT_DAY.day.map((m) => (
            <MenuItem key={m.value} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ flex: 2 }}>
        <InputLabel
          id="year-label"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "#71767b",
            fontSize: "13px",
            transform: "translate(0, 0) scale(1)",
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        >
          년
        </InputLabel>
        <Select
          labelId="year-label"
          sx={{
            border: "0.5px solid #333639",
            borderRadius: "4px",
            position: "relative",
            paddingTop: "4px",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiFilledInput-root": {
              border: "1px solid #333639",
              borderRadius: "4px",
              "&.Mui-focused": {
                borderColor: "#1D9BF0",
                backgroundColor: "transparent",
              },
            },
            "&:focus .MuiInputLabel-root": {
              color: "#1D9BF0",
            },
          }}
        >
          {SELECT_DAY.year.map((m) => (
            <MenuItem key={m.value} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
