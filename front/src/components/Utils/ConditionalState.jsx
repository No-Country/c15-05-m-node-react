import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConditionalState = (props) => {
    const stock = props.stock;

    return (
        <div>
            {stock === 0 || stock === null ? (<CancelIcon className='text-red-600'/>) 
            : (stock <= 5 ? (<WarningIcon className='text-yellow-500'/>)
            : (<CheckCircleIcon className='text-green-600'/>))}
        </div>
    )
}


export default ConditionalState;