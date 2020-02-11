import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const CategorySelect = () => {
  return (
    <div style={{display: 'flex'}}>
        <div style={{flex:1, paddingRight: 20}}>
            <FormControl style={{width: '100%'}}>
                <InputLabel htmlFor="grouped-native-select">Parent Category</InputLabel>
                <Select native defaultValue="" input={<Input id="grouped-native-select" />}>
                    <option value="" />
                    <option value={1}>STARTUP</option>
                    <option value={2}>TECH</option>
                    <option value={3}>NEWS</option>
                    <option value={4}>PORTFOLIO</option>
                </Select>
            </FormControl>
        </div>
        <div style={{flex:1, paddingLeft: 20}}>
            <FormControl style={{width: '100%'}}>
                <InputLabel htmlFor="grouped-native-select">Child Category</InputLabel>
                <Select native defaultValue="" input={<Input id="grouped-native-select" />}>
                    <option value="" />
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                </Select>
            </FormControl>
        </div>
    </div>
  );
}

export default CategorySelect;