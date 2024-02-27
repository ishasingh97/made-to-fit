export const MADE_TO_FIT = 'Made to fit'
export const CREATE_CLIENT = 'Create client'
export const ADD_MEASUREMENTS = 'Add measurements'
export const EDIT_MEASUREMENTS = 'Edit measurements'

export const CREATE_FORM = [
    {
        label : 'Name',
        name : 'name', 
        type : 'text',
        placeholder : 'Name' 
    }, 
    {
        label : 'Phone number',
        name:'phone', 
        type:'text',
        placeholder:'Phone number' 
    },
    {
        label : 'Gender',
        name:'gender', 
        as:'select',
        options : [
            {disabled : true, text : 'Select gender', value : ''},
            {disabled : false, text : 'Female', value : 'female'},
            {disabled : false, text : 'Male', value : 'male'},
        ]
    }
]

export const MEASUREMENT_FORM ={
    neck : {
        label : 'Neck',
        name : 'neck', 
        type : 'text',
        placeholder : 'Neck' ,
    },
    chest:{
        label : 'Chest',
        name : 'chest', 
        type : 'text',
        placeholder : 'Chest' ,
    },
    waist: {
        label : 'Waist',
        name : 'waist', 
        type : 'text',
        placeholder : 'Waist' ,
    },  
    shirtLength: {
        label : 'Shirt length',
        name : 'shirtLength', 
        type : 'text',
        placeholder : 'Shirt length' ,
    }, 
    shoulderWidth : {
        label : 'Shoulder width',
        name : 'shoulderWidth', 
        type : 'text',
        placeholder : 'Shoulder width' ,
    }, 
    armLength : {
        label : 'Arm length',
        name : 'armLength', 
        type : 'text',
        placeholder : 'Arm length' ,
    }, 
    wrist : {
        label : 'Wrist',
        name : 'wrist', 
        type : 'text',
        placeholder : 'Wrist' ,
    }, 
    biceps :{
        label : 'Biceps',
        name : 'biceps', 
        type : 'text',
        placeholder : 'Biceps' ,
    }, 
    hip: {
        label : 'Hip',
        name : 'hip', 
        type : 'text',
        placeholder : 'Hip' ,
    }, 
    inseam :{
        label : 'Inseam',
        name : 'inseam', 
        type : 'text',
        placeholder : 'Inseam' ,
    }, 
    sleeveLength: {
        label : 'Sleeve length',
        name : 'sleeveLength', 
        type : 'text',
        placeholder : 'Sleeve Length' ,
    }
}

export const INITIAL_CREATE =  {
    name: '',
    gender: 'female',
    phone: '',
    measurement : []
  }