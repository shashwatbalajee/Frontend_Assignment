import React, { useEffect, useState } from 'react'
import {
  Accordion, AccordionSummary, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography, Checkbox,
  Switch, Button
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function Schema() {
  const [checked, setChecked] = useState()
  const [cancel, setCancel] = useState()
  const [submit, setSubmit] = useState()
  const [pizza,setPizza] = useState([]) 
  const [pasta,setPasta] = useState([])
  
  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    console.log({ cancel })
    setCancel()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ submit })
    setSubmit()
  }

  const getData=()=>{
    fetch('pizza.json',{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson)
      setPizza(myJson)
    })
  } 
  useEffect(()=>{
    getData()
  },[])

  const getData1=()=>{
    fetch('pasta.json',{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson)
      setPasta(myJson)
    })
  } 
  useEffect(()=>{
    getData1()
  },[])

  return (
    <div>
     
      <Grid align='center' style={{ padding: '3%' }}>
        <Paper elevation={3} direction='column' style={{ width: '50%' }}>
          <Grid container spacing={2} style={{ padding: '2%' }}>
            <Grid item xs={12}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>New Pizza</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Pizza Name</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField variant='outlined' label='Enter Pizza Name' style={{ width: '100%' }} ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Pizza Type</Typography>
            </Grid>
            <Grid container spacing={2} style={{ padding: '2%' }}>
              <Grid item xs={6}>
                <TextField variant='outlined' label='Naples Style Pizza' style={{ width: '100%' }}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField variant='outlined' label='New York Style Pizza' style={{ width: '100%' }}></TextField>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Slices</Typography>
            </Grid>
            <Grid item xs={8}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>1</Typography>
                </AccordionSummary>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Toppings</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Sauce</Typography>
            </Grid>
            <Grid item xs={8}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-content'
                >
                  <Typography>Red</Typography>
                </AccordionSummary>
              </Accordion>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Main Topping</Typography>
            </Grid>
            <Grid item xs={8}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-content'
                >
                  <Typography>Mushroom</Typography>
                </AccordionSummary>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label='Include seasonings' />
              </FormGroup>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Show advanced fields</Typography>
            </Grid>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Grid container spacing={2} style={{ padding: '2%' }}>
              <Grid item xs={4}>
                <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: 'medium', textAlign: 'left' }}>Show advanced fields</Typography>
              </Grid>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Grid item xs={4}>
                <Button variant='outlined' style={{ width: '10%', marginLeft: '100%', marginTop: '-10%' }} onClick={handleCancel}>Cancel</Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant='outlined' style={{ width: '10%', marginLeft: '280%', marginTop: '-48%', backgroundColor: 'skyblue' }} onClick={handleSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      
    </div>
  )
}

export default Schema