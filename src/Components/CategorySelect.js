import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryQuery from '../Queries/CategoryQuery';
import { useQuery } from '@apollo/react-hooks';


const CategorySelect = ({setChildCategory, setParentCategory, parentCategory}) => {
    const { data, erorr, loading } = useQuery(CategoryQuery);
    if (erorr) return <h1>Error</h1>
  	if (loading) return <h1>Loading</h1>
    const pCategory = data.allCategory;
    const cCategory = data.allChildcategory;

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex:1, paddingRight: 20}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="grouped-native-select">Parent Category</InputLabel>
                    <Select 
                        native 
                        defaultValue="" 
                        input={<Input id="grouped-native-select" />}
                        onChange={(e) => setParentCategory(e.target.value)}
                    >
                        <option value="" />
                        {pCategory.map(item => (
                            <option value={item.name}>{item.name.toUpperCase()}</option>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div style={{flex:1, paddingLeft: 20}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="grouped-native-select">Child Category</InputLabel>
                    <Select 
                        native 
                        defaultValue="" 
                        input={<Input id="grouped-native-select" />}
                        onChange={(e) => setChildCategory(e.target.value)}
                    >
                        <option value=""/>
                        {cCategory.filter(c => c.category.name === parentCategory).map(item => (
                            <option value={item.name}>{item.name.toUpperCase()}</option>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default CategorySelect;