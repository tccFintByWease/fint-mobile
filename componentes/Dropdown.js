import React, { useState } from "react";
import {StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from 'react-hook-form';

function Dropdown({placeholder}) {
    const [moedaAbrir, setMoedaAbrir] = useState(false);
    const [moedaValor, setMoedaValor] = useState(null);
    const [moeda, setMoeda] = useState([
        { label: "BRL", value: "real" },
        { label: "USD", value: "dolar" },
        { label: "EUR", value: "euro" },
        { label: "GBP", value: "libra" },
    ]);
    const { control } = useForm();
    return (
        <View style={styles.container}>
            <Controller
                name="company"
                defaultValue=""
                control={control}
                render={() => (
                <View style={styles.dropdownCompany}>
                    <DropDownPicker
                    style={styles.dropdown}
                    open={moedaAbrir}
                    value={moedaValor} 
                    items={moeda}
                    setOpen={setMoedaAbrir}
                    setValue={setMoedaValor}
                    setItems={setMoeda}
                    placeholder={placeholder}
                    placeholderStyle={styles.placeholderStyles}
                    activityIndicatorColor="#000"
                    zIndex={1000}
                    zIndexInverse={3000}
                    />
                </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  placeholderStyles: {
    color: "#000",
    fontFamily: "roboto-bold",
    fontSize: 15
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 40,
    textAlign: 'center',
    backgroundColor: '#fff'
  },
});

export default Dropdown;
