import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 370,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

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

const names = [
  'ALERGOLOGIA',
  'ANGIOLOGIA',
  'BUCO MAXILO',
  'CARDIOLOGIA CLÍNICA',
  'CARDIOLOGIA INFANTIL',
  'CIRURGIA CABEÇA E PESCOÇO',
  'CIRURGIA CARDÍACA',
  'CIRURGIA DE TÓRAX',
];

function getStyles(name, specialty, theme) {
  return {
    fontWeight:
      specialty.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
    
  const classes = useStyles();
  const theme = useTheme();  
  

  const handleChange = (event) => {
    props.setSpecialty(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Especialidades</InputLabel>
        <Select         
          id="specialty"
          name="specialty"
          multiple
          value={props.specialty}
          specialty={props.specialty}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, props.specialty, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>      
    </div>
  );
}