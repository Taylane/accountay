import React, { Fragment } from 'react'

import './NewTransaction.css'

import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function NewTransaction() {
    return (
        <Fragment className="NewTransaction">
            <header className="Transaction-Header">
                <h1>Novo Lançamento</h1>
            </header>
            <div>
                <div className="Overall-Information">
                    <FormControl>
                        <InputLabel htmlFor="totalValue">Valor Total</InputLabel>
                        <Input
                            id="totalValue"
                            // value={}
                            // onChange={}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        />
                    </FormControl>
                    <TextField label="Nome" />

                    <FormControl>

                        <input type="date" id="start" name="trip-start"
                            value="2018-07-22"
                            min="2018-01-01" max="2018-12-31" />
                    </FormControl>
                    <FormControl
                    //  className={classes.formControl}
                    >
                        <InputLabel id="person-select">
                            Recorrencia
                    </InputLabel>
                        <Select
                            labelId="person-select"
                            id="person-select"
                        // value={'age'}
                        // onChange={handleChange}
                        >
                            <MenuItem value={1}>Mensal</MenuItem>
                            <MenuItem value={2}>Unico</MenuItem>
                            <MenuItem value={3}>Parcela</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControlLabel
                            control={<Checkbox
                            // checked={state.checkedA}
                            //  onChange={handleChange}
                            //   name="checkedA" 
                            />}
                            label="Entrada"
                        />
                        <FormControlLabel
                            control={<Checkbox
                            // checked={state.checkedA}
                            //  onChange={handleChange}
                            //   name="checkedA" 
                            />}
                            label="Saida"
                        />
                    </FormControl>

                </div>
                <div>
                    <h1>Pessoas</h1>
                    {/* <FormControl
                    //  className={classes.formControl}
                    >

                        <InputLabel id="person-select">
                            Pessoa
                    </InputLabel>
                        <Select
                            labelId="person-select"
                            id="person-select"
                        // value={'age'}
                        // onChange={handleChange}
                        >
                            <MenuItem value={1}>Tay</MenuItem>
                            <MenuItem value={2}>Sid</MenuItem>
                        </Select>
                    </FormControl> */}
                    <InputLabel >
                        Pessoa Tay
                    </InputLabel>
                    <FormControl>
                        <InputLabel htmlFor="totalValue">Valor Por Pessoa</InputLabel>
                        <Input
                            id="totalValue"
                            // value={}
                            // onChange={}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        />
                    </FormControl>
                    <InputLabel >
                        Pessoa Sid
                    </InputLabel>
                    <FormControl>
                        <InputLabel htmlFor="totalValue">Valor Por Pessoa</InputLabel>
                        <Input
                            id="totalValue"
                            // value={}
                            // onChange={}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        />
                    </FormControl>
                </div>
            </div>
        </Fragment>
    )
}

export default NewTransaction
