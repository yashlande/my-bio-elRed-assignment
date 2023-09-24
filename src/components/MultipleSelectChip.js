import * as React from "react";
import { createStyles, makeStyles, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ data, onChange }) {
  const names = data;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const saveData = [];
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    value.forEach((item)=>{
      const data={
        value:item,
        _id:Math.random
      }
      saveData.push(data)
    })
    onChange(saveData);
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    console.log("clicked delete");
    setPersonName((current) => _without(current, value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  clickable
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  onDelete={(e) => handleDelete(e, value)}
                  onClick={() => console.log("clicked chip")}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names &&
            names.length > 0 &&
            names.map((name) => (
              <MenuItem
                key={name._id}
                value={name.value}
                style={getStyles(name.value, personName, theme)}
              >
                {name.value}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
