import MUIButton from '@mui/material/Button'

const Button=(props)=>{
    const {
        customClasses = {},
        children
    } = props;

    return(
        <MUIButton
        classes={{...customClasses}}
        {...props}
        >
            {children}
        </MUIButton>
    )
}

Button.defaultProps={
    children:'New Button',
    color: 'primary',
    variant:'contained',
    size:'medium',
    disabled:false,
    fullWidth: false,
}

export default Button;